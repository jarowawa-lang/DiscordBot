require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Partials,
    ActivityType,
    Events
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.Message
    ]
});

client.once(Events.ClientReady, (client) => {
    console.log(`✅ Logged in as ${client.user.tag}`);

    client.user.setPresence({
        activities: [
            {
                name: "Mova Studios",
                type: ActivityType.Watching
            }
        ],
        status: "online"
    });
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    if (message.content === "/ping") {
        return message.reply("🏓 Pong!");
    }

    if (message.content === "/help") {
        return message.reply(
`**Available Commands**
• /ping
• /help
• /info`
        );
    }

    if (message.content === "/info") {
        return message.reply(
`🤖 Discord Bot
Status: Online
Library: discord.js v14`
        );
    }
});

client.login(process.env.DISCORD_TOKEN);
