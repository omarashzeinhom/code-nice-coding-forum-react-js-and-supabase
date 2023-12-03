import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { AccountAvatar } from "./components";
import { Nav, Header } from "./components";
import {
  FormControl,
  Input,
  Box,
  Button,
  FormGroup,
  Container,
  Divider,
} from "@mui/material";

interface Session {
  user: {
    email: string;
  };
}

interface User {
  id: string;
}

interface ProfileData {
  username: string | null;
  website: string | null;
  avatar_url: string | null;
}

interface UpdateProfileParams {
  username: string | null;
  website: string | null;
  avatar_url: string | null;
}

interface Props {
  session: Session | null;
  user: User | null;
}

export default function Account({ session, user }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      getProfile();
    }
  }, [session]);

  async function getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    if (!data?.user) {
      throw new Error("User not logged in");
    }

    return data.user;
  }

  async function getProfile() {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();

      const { data, error, status } = await supabase
        .from<ProfileData>("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", currentUser.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }: UpdateProfileParams) {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();

      const updates = {
        id: currentUser.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <Header />
      <Nav url={undefined} size={undefined} session={undefined} />

      <Container fixed maxWidth="md">
        <FormGroup>
          <Box
            m={5}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FormControl>
              <label>User Avatar</label>
              <AccountAvatar
                url={avatar_url}
                size={150}
                onUpload={(url: string) => {
                  setAvatarUrl(url);
                  if (username !== null && website !== null) {
                    updateProfile({ username, website, avatar_url: url });
                  }
                }}
              />
            </FormControl>
          </Box>

          <Divider />

          <FormControl>
            <label htmlFor="email">Email</label>
            <Input type="text" value={session?.user.email} />
          </FormControl>
          <Divider />

          <FormControl>
            <label htmlFor="username">Name</label>
            <Input
              id="username"
              type="text"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <Divider />

          <FormControl>
            <label htmlFor="website">Website</label>
            <Input
              id="website"
              type="website"
              value={website || ""}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Button
              onClick={() => {
                if (username !== null && website !== null && avatar_url !== null) {
                  updateProfile({ username, website, avatar_url });
                }
              }}
              disabled={loading}
              variant="outlined"
            >
              {loading ? "Loading ..." : "Update"}
            </Button>
          </FormControl>
        </FormGroup>
      </Container>
    </div>
  );
}
