//priority: 10

import { teams } from "./teams";

function runTeamsCreationTool(server) {
  teams.forEach((t) => {
    server.runCommand(`team add ${t["id"]}`);
    server.runCommand(`team modify ${t["id"]} ${t["state"]} {"text":"${t["name"]} ","color":"${t["color"]}"}`);
    server.runCommand(`team modify ${t["id"]} friendlyFire true`);
    server.runCommand(`team modify ${t["id"]} deathMessageVisibility always`);
  });
}

ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
        Commands.literal('setupTeams')
            .requires(src => src.hasPermission(2))
            .executes(context => {
                const server = context.source.server;
                
                runTeamsCreationTool(server);
                
                context.source.sendSuccess(Text.of('Команды успешно созданы!'), true);
                return 1;
            })
    );
});
