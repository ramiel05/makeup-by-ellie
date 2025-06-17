import { defineAction } from "astro:actions";
import { z } from "astro:schema";
// LEFTOFF yay i sent something to my mailer service. now send actual contact deets from form
const MAILORD_URL = "http://localhost:4000/makeup-by-ellie-contact";

export const server = {
  sendContact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      const payload = {
        // Your data here
        name: "Alice",
        email: "alice@example.com",
      };

      fetch(MAILORD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
          }
          return response.json(); // or response.text() if not JSON
        })
        .then((data) => {
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Error posting JSON:", error);
        });
    },
  }),
};
