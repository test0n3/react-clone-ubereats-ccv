/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Redirect, navigate } from "@reach/router";
// import { useUser, useUserUpdater } from "../contexts/user";

import { logout } from "../services/user";
const API_CONVERSATION_URL = "http://localhost:4000/conversations";

function Home() {
  const user = useUser();
  const updateUser = useUserUpdater();
  const [conversations, setConversations] = React.useState([]);

  React.useEffect(() => {
    if (!user) return;
    fetch(API_CONVERSATION_URL, {
      credentials: "include",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.status = response.status;
          throw error;
        }
        return response;
      })
      .then(response => response.json())
      .then(data => setConversations(data))
      .catch(error => {
        if (error.status === 401) navigate("/login");
      });
  }, [user]);

  async function handleLogoutClick() {
    await logout();
    updateUser({ type: "LOGOUT" });
  }

  if (!user) return <Redirect to="login" noThrow />;

  return (
    <section css={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1 css={{ margin: "3rem 0", fontSize: "2rem", textAlign: "center" }}>
        Conversations
      </h1>
      <button onClick={handleLogoutClick}>Log out</button>
      {conversations.map(conversation => (
        <section key={conversation.id}>
          <h2>{conversation.title}</h2>
          {conversation.messages.map(message => (
            <article key={message.id}>
              <p>{message.text}</p>
            </article>
          ))}
        </section>
      ))}
    </section>
  );
}

export default Home;
