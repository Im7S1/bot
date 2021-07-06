module.exports = {
    name: 'restart',
   async execute(client, message, args) {
        let allowed = ["679800464145252415", "730048220553805825", "679800692793540635"]
        if (!message.member.roles.cache.some(m => allowed.includes(m.id))) return message.reply("**انت لا تمتلك الصلاحيات الكافية**");

        await message.channel.send(`Restarting.`)
        process.exit();
    }
}