# 🎂 Discord Birthday Bot

A friendly and fun Discord bot that reminds your server about members' birthdays! Never forget to celebrate again! 🎉

## 🚀 Features

-   Easily add and remove birthdays using simple commands through a popup menu:
![Discord_Rg3FsEOhtK](https://github.com/user-attachments/assets/3bf09ea3-9aee-46f9-a1d4-5e5fd06e7be8)
-   Automatic birthday notifications in a designated channel:
![Discord_XOz4dqzjMm](https://github.com/user-attachments/assets/44d70b6b-2e80-4eab-a814-7a5eeed657ea)



## 🔧 Installation


### Requirements

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [ts-node](https://www.npmjs.com/package/ts-node) for running TypeScript files
-   [Discord.js](https://discord.js.org/) (v14)
-   SQLite database for storing birthdays

### Setup Steps

1.  **Clone the Repository**
    
    ```sh
    git clone https://github.com/LukasBisz/DiscordBirthdayBot.git
    cd DiscordBirthdayBot
    ```
    
2.  **Install Dependencies**
    
    ```sh
    npm install
    ```
    
3.  **Set Up the ************`.env`************ File** Create a `.env` file and add the following:
    
    ```env
    DISCORD_TOKEN=your-bot-token-here
    DISCORD_BOT_CLIENT_ID=your-bot-discord-id
    GUILD_ID=your-server-id-here
    CHANNEL_ID=birthday-announcement-channel-id
    ```
    Note: To find your CHANNEL_ID, enable Developer Mode in Discord's settings (User Settings > Advanced > Developer Mode). Right-click on the channel where you want the birthday announcements to appear and click "Copy ID."
    
5.  **Run the Bot**
    
    ```sh
    npm start
    ```
## 📜 Commands

| Command      	   | Description                             | 
|------------------|-----------------------------------------|
| /add-birthday    | Adds your birthday to the database      |
| /remove-birthday | Removes your birthday from the database | 

## 💡 Future Plans

-   Set up a command to skip certain `.env` configuration tasks.
-   Implement an admin role with access to specific functions.
-   Handle special cases for leap years.
-   Display different messages for available data in the database.
-  Add a help command.

## 📜 License

This project is licensed under the MIT License.
