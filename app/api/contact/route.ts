import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Received a POST request");

  const { name, email, message } = await req.json();
  console.log("Data:", { name, email, message });

  // Discord webhook URL
  const webhookURL =
    "https://discord.com/api/webhooks/1298988103540801626/Q7x7LSjU35KUpz26t2yZLjhrW7rRBxcytAifERHrYG3xlYOASg6cTK0VhzA4Wl7r9TwL";

  // Prepare the message
  const discordMessage = {
    content: `----New contact form submission----\n**Name:** ${name}\n**Email\\Phone Number:** ${email}\n**Message:** ${message}`,
  };

  try {
    // Send data to Discord
    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });

    // Respond with success
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message to Discord:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
