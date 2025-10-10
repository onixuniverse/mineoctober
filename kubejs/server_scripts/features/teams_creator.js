//priority: 10

let teams = [
    // [id], [name], [color], [state]
    {
        // tier 1
        id: "baron_republic",
        name: "Старейшина&r",
        color: "#2e6602",
        state: "prefix"
    },
    {
        // ...
        id: "count_republic_male",
        name: "Городничий",
        color: "#2e6602",
        state: "prefix"
    },
    {
        // ...
        id: "count_republic_female",
        name: "Городничая",
        color: "#2e6602",
        state: "prefix"
    }
]

function runTeamsCreationTool(server) {
    teams.forEach(t => {
        server.runCommand(`team add ${t['id']}`);
        server.runCommand(`team modify ${t['id']} ${t['state']} {"text":"${t['name']} ","color":"${t['color']}"}`);
        server.runCommand(`team modify ${t['id']} friendlyFire true`);
        server.runCommand(`team modify ${t['id']} deathMessageVisibility always`);
    });
};

let ranks = [
    // [id], [colored_name], <color>, [power], [max_claimed_chunks]
    {
        id: "baron_republic",
        name: "&2Старейшина&r",
        color: "#2e6602",
        power: 2000,
        max_claimed_chunks: 10
    },
    {
        id: "count_republic_male",
        name: "&3Городничий",
        color: "#2e6602",
        power: 2000,
        max_claimed_chunks: 10
    },
    {
        id: "count_republic_female",
        name: "&3Городничая",
        color: "#2e6602",
        power: 2000,
        max_claimed_chunks: 10
    }
];


function runFTBRanksCreationTool(server) {
    ranks.forEach(r => {
        server.runCommand(`ftbranks create ${r['id']} ${r['power']}`);
        server.runCommand(`ftbranks node add ${r['id']} ftbranks.name_format ${r['name']} {name}`);
        server.runCommand(`ftbranks node add ${r['id']} ftbranks.max_claimed ${r['max_claimed_chunks']}`);
    });
};

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    
    event.register(
        Commands.literal('setupTeams')
            .requires(src => src.hasPermission(2))
            .executes(context => {
                const server = context.source.server;
                
                runTeamsCreationTool(server);
                // runFTBRanksCreationTool(server);
                
                context.source.sendSuccess(Text.of('Команды успешно созданы!'), true);
                return 1;
            })
    );
});