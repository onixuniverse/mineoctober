//priority: 10

let teams = [
    //Республиканец
    //Tier1
    ["baron_republic", "Cтарейшина", "#855438"],
    //Tier2
    ["count_republic_male", "Городничий", "#788a3e"],
    ["count_republic_female", "Городничая", "#788a3e"],
    //Tier3
    ["duke_republic", "Бургомистр", "#a63b11"],
    //Tier4
    ["king_republic_male", "Лорд-Мэр", "#ccb323"],
    ["king_republic_male", "Леди-Мэр", "#ccb323"],

    //Римский республиканец
    //Tier1
    ["baron_republic_male_roman", "Магистр", "#8a3232"],
    ["baron_republic_female_roman", "Магистра", "#8a3232"],
    //Tier2
    ["count_republic_roan", "Префект", "#3261d9"],
    //Tier3
    ["duke_republic_roman", "Трибун", "#d98632"],
    //Tier4
    ["king_republic_roman", "Консул", "#bd0000"],

    //Феодал
    //Tier1
    ["baron_feudal_male", "Барон", "#104600"],
    ["baron_feudal_female", "Баронесса", "#104600"],
    //Tier2
    ["count_feudal_male", "Граф", "#a6aebd"],
    ["count_feudal_female", "Графиня", "#a6aebd"],
    //Tier3
    ["duke_feudal_male", "Герцог", "#c95d10"],
    ["duke_feudal_female", "Герцогиня", "#c95d10"],
    //Tier4
    ["king_feudal_male", "Его Величество", "#d4bf00"],
    ["king_feudal_female", "Её Величество", "#d4bf00"],
    
    //Римский феодал
    //Tier1
    ["baron_feudal_roman", "Губернатор", "#775dba"],
    //Tier2
    ["count_feudal_male_roman", "Комес", "#cf2323"],
    ["count_feudal_female_roman", "Комитисса", "#cf2323"],
    //Tier3
    ["duke_feudal_male_roman", "Дукс", "#6e0325"],
    ["duke_feudal_female_roman", "Дукисса", "#6e0325"],
    //Tier4
    ["king_feudal_male_roman", "Рекс", "#8b49cc"],
    ["king_feudal_female_roman", "Регина", "#8b49cc"]
]

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

function runTeamsCreationTool(server) {
    teams.forEach(t => {
        server.runCommand(`team add ${t[0]}`);
        server.runCommand(`team modify ${t[0]} prefix {"text":"${t[1]} ","color":"${t[2]}"}`);
        server.runCommand(`team modify ${t[0]} friendlyFire true`);
        server.runCommand(`team modify ${t[0]} deathMessageVisibility always`);
    });
};

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