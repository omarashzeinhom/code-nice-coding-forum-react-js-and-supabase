import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
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

export default function Account({ session, user }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  console.log(avatar_url);
  useEffect(() => {
    getProfile();
  }, [session]);

  async function getCurrentUser() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    if (!session?.user) {
      throw new Error("User not logged in");
    }

    return session.user;
  }

  async function getProfile() {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      } else {
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

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
      <Nav />

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
                onUpload={(url) => {
                  setAvatarUrl(url);
                  updateProfile({ username, website, avatar_url: url });
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
              onClick={() => updateProfile({ username, website, avatar_url })}
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
