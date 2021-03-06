(function() {
    'use strict';

    angular
        .module('app')
        .factory('FrameworkService', FrameworkService);

    FrameworkService.$inject = [];

    /* @ngInject */
    function FrameworkService() {
        var vm = this;

        angular.extend(vm, {
            attributes: getAttributes(),
            assessments: getAssessments(),
            cognitiveProcesses: getCognitiveProcesses(),
            coreDrives: getCoreDrives(),
            getSubProcessName: getSubProcessName,
            getTechniqueName: getTechniqueName,
            //// Frameworks
            bloomFramework: getBloomFramework(),
            gamificationFramework: getGamificationFramework(),
        });

        return vm;

        //////
        function getAttributes() {
            var attributes = [
                  "Envolvimento com trabalho",
                  "Participação",
                  "Atenção",
                  "Persistência",
                  "Domínio",
                  "Socialização",
            ];

            return attributes;
        }

        function getAssessments(){
            var assessment = [
                "Selecionar resposta",
                "Combinar",
                "Escolha forçada",
                "Construir resposta",
                "Ordenar",
                "Completar",
                "Analogia",
                "Oddity",
                "Reasoning",
                "Resolver problema",
                "Redesign",
                "Predizer",
                "Executar",
                "Implementar",
                "Checar",
                "Criticar",
                "Projetar",
            ];

            return assessment;
        }

        function getCognitiveProcesses() {
            var cognitiveProcesses = [
               "Lembrar",
               "Entender",
               "Aplicar",
               "Analisar",
               "Avaliar",
               "Criar",
            ];

            return cognitiveProcesses;
        }

        function getCoreDrives() {
            var coreDrives = [
                  "Imprevisibilidade & Curiosidade",
                  "Desenvolvimento & Realização",
                  "Empoderamento & Feedback",
                  "Significado Épico & Chamado",
                  "Propriedade & Posse",
                  "Escassez & Impaciência",
                  "Influência Social & Pertencimento",
                  "Perda & rejeição",
            ];

            return coreDrives;
        }

        function getTechniqueName(techniqueId) {
            var tech = techniqueId;
            _.forEach(vm.gamificationFramework, function(coreDrive) {
                _.forEach(coreDrive.techniques, function(technique) {
                    if(technique.id == techniqueId){
                        tech = technique.tecnica;
                    }
                });
            });
            return tech;
        }

        function getSubProcessName(subProcessId) {
            var sub = subProcessId;
            _.forEach(vm.bloomFramework, function(process) {
                _.forEach(process.subprocesses, function(subprocess) {
                    if(subprocess.id == subProcessId){
                        sub = subprocess.verbo;
                    }
                });
            });
            return sub;
        }

        function getBloomFramework() {
            var framework = [
                {
                    "id": 1,
                    "process": "Remember",
                    "processo": "Lembrar",
                    "subprocesses": [
                        {
                            "id": "P1",
                            "verb": "Identify",
                            "verbo": "Identificar",
                        },
                        {
                            "id": "P2",
                            "verb": "Retrieve",
                            "verbo": "Recuperar",
                        },
                    ]
                },
                {
                    "id": 2,
                    "process": "Understand",
                    "processo": "Entender",
                    "subprocesses": [
                        {
                            "id": "P3",
                            "verb": "Interpret",
                            "verbo": "Interpretar",
                            "synonyms":["Clarify", "Paraphrase", "Represent", "Translate"]
                        },
                        {
                            "id": "P4",
                            "verb": "Exemplify",
                            "verbo": "Exemplificar",
                            "synonyms":["Illustrate", "Instantiate"]
                        },
                        {
                            "id": "P5",
                            "verb": "Classify",
                            "verbo": "Classificar",
                            "synonyms":["Categorize", "Subsume"]
                        },
                        {
                            "id": "P6",
                            "verb": "Summarize",
                            "verbo": "Resumir",
                            "synonyms":["Abstract", "Generalize"]
                        },
                        {
                            "id": "P7",
                            "verb": "Infer",
                            "verbo": "Inferir",
                            "synonyms":["Conclude", "Extrapolate", "Interpolate", "Predict"]
                        },
                        {
                            "id": "P8",
                            "verb": "Compare",
                            "verbo": "Comparar",
                            "synonyms":["Contrast", "Map", "Match"]
                        },
                        {
                            "id": "P9",
                            "verb": "Explain",
                            "verbo": "Explicar",
                            "synonyms":["Construct models"]
                        },
                    ]
                },
                {
                    "id": 3,
                    "process": "Apply",
                    "processo": "Aplicar",
                    "subprocesses": [
                        {
                            "id": "P10",
                            "verb": "Execute",
                            "verbo": "Executar",
                            "synonyms":["Carry out"]
                        },
                        {
                            "id": "P11",
                            "verb": "Implement",
                            "verbo": "Implementar",
                            "synonyms":["Use"]
                        },
                    ]
                },
                {
                    "id": 4,
                    "process": "Analyze",
                    "processo": "Analisar",
                    "subprocesses": [
                        {
                            "id": "P12",
                            "verb": "Differentiate",
                            "verbo": "Diferenciar",
                            "synonyms":["Discriminate", "Distinguish", "Focus", "Select"]
                        },
                        {
                            "id": "P13",
                            "verb": "Organize",
                            "verbo": "Organizar",
                            "synonyms":["Find coherence", "Integrate", "Outline", "Parse", "Structure"]
                        },
                        {
                            "id": "P14",
                            "verb": "Attribute",
                            "verbo": "Atribuir",
                            "synonyms":["Deconstruct"]
                        },
                    ]
                },
                {
                    "id": 5,
                    "process": "Evaluate",
                    "processo": "Avaliar",
                    "subprocesses": [
                        {
                            "id": "P15",
                            "verb": "Check",
                            "verbo": "Checar",
                            "synonyms":["Coordinate", "Detect", "Monitor", "Test"]
                        },
                        {
                            "id": "P16",
                            "verb": "Critique",
                            "verbo": "Criticar",
                            "synonyms":["Judge"]
                        },
                    ]
                },
                {
                    "id": 6,
                    "process": "Create",
                    "processo": "Criar",
                    "subprocesses": [
                        {
                            "id": "P17",
                            "verb": "Generate",
                            "verbo": "Gerar",
                            "synonyms":["Hypothesize"]
                        },
                        {
                            "id": "P18",
                            "verb": "Plan",
                            "verbo": "Planejar",
                            "synonyms":["Design"]
                        },
                        {
                            "id": "P19",
                            "verb": "Produce",
                            "verbo": "Produzir",
                            "synonyms":["Construct"]
                        },
                    ]
                },
            ];

            return framework;
        }

        function getGamificationFramework() {
            var framework = [
                {
                    "motivacao": "Imprevisibilidade & Curiosidade",
                    "core-drive": " Unpredictability & Curiosity",
                    "id": 7,
                    "techniques":[
                        {
                          "id": "T74",
                          "tecnica": "Ovos de Páscoa",
                          "technique": "Easter Eggs",
                          "descricao": "Uma surpresa agradável originada de um acontecimento inesperado",
                          "description": "A pleasant novel suprise based on an unexpected trigger",
                        },
                        {
                          "id": "T81",
                          "tecnica": "Lottery (Rolling Rewards)",
                          "technique": "Lottery (Rolling Rewards)",
                          "descricao": "Recompensas que vão de uma pessoa para outra - alguém tem que ganhar.",
                          "description": "Rewards that go from one person to another - someone has to win.",
                        },
                        {
                          "id": "T73",
                          "tecnica": "Mystery Box (Random Rewards)",
                          "technique": "Mystery Box (Random Rewards)",
                          "descricao": "A recompensa pode ser qualquer coisa, e só será descoberta quando a ação for concluída",
                          "description": "Rewards may be anything and will only be found out once the action is completed",
                        },
                        {
                          "id": "T77",
                          "tecnica": "Obvious Wonder",
                          "technique": "Obvious Wonder",
                          "descricao": "Algo que as pessoas param para observar, mas somente quando você aponta",
                          "description": "Something that people keep seeing, but marvel only when you point out",
                        },
                        {
                          "id": "T82",
                          "tecnica": "Mini Desafios",
                          "technique": "Mini Quests",
                          "descricao": "Uma pequena busca desnecessários que pode ser feito em poucos minutos",
                          "description": "A small NONESSENTIAL quest that can be accomplished within a few minutes",
                        },
                        {
                          "id": "T80",
                          "tecnica": "Oracle Effect",
                          "technique": "Oracle Effect",
                          "descricao": "Quando os jogadores querem descobrir se as previsões se tornarao realidade ou não",
                          "description": "When players want to find out if predictions will come true or not",
                        },
                        {
                          "id": "T76",
                          "tecnica": "Visual Storytelling",
                          "technique": "Visual Storytelling",
                          "descricao": "Fornecer informações aos usuários no formato de livro de histórias visuais",
                          "description": "Providing Information to users through a visual storybook format",
                        },
                        {
                          "id": "T79",
                          "tecnica": "Mischief Puzzle",
                          "technique": "Mischief Puzzle",
                          "descricao": "Ambientes lúdicos que é inesperado e poderiam ser politicamente incorreto",
                          "description": "Playful environments that is unexpected and could be politically incorrect",
                        },

                    ]

                },

                {
                    "motivacao": "Desenvolvimento & Realização",
                    "core-drive": "Development and accomplishment",
                    "id": 2,
                    "techniques":[
                        {
                          "id": "T09",
                          "tecnica": "Pontos",
                          "technique": "Points",
                          "descricao": "Unidades de medição do status. Pontos de consumo pode ser usado para comprar coisas.",
                          "description": "Status Points Keep Score. Consumable Points can be used to buy things",
                        },
                        {
                          "id": "T11",
                          "tecnica": "Ranking",
                          "technique": "Leaderboard",
                          "descricao": "Compara o jogador com outros jogadores em um Ranking",
                          "description": "Ranks you against others",
                        },
                        {
                          "id": "T21",
                          "tecnica": "LevelUp",
                          "technique": "LevelUp",
                          "descricao": "Uma curva íngreme para a maestria. Jogadores podem subir em um sistema de niveis",
                          "description": "Players can move up in a level system",
                        },
                        {
                          "id": "T17",
                          "tecnica": "Lista de Desafios",
                          "technique": "Quest Lists",
                          "descricao": "Mostra uma lista de missões inacabadas, ou tarefas, para que os usuários tomem medidas",
                          "description": "Shows a list of unfinished quests, or tasks, to make users take action",
                        },
                        {
                          "id": "T24",
                          "tecnica": "Luta de Chefões",
                          "technique": "Boss Fights",
                          "descricao": "Um grande desafio que é difícil de superar antes que outras tarefas sejam concluídas",
                          "description": "A big challenge that is difficult to overcome before users can proceed",
                        },
                        {
                          "id": "T12",
                          "tecnica": "Barra de Progresso",
                          "technique": "Progress Bar",
                          "descricao": "Mostra o seu progresso do jogador e quanto falta até a realização",
                          "description": "Shows player's progress towards completion",
                        },
                        {
                          "id": "T22",
                          "tecnica": "Efeito Aura",
                          "technique": "Aura Effect",
                          "descricao": "Quando o trabalho de alguém gera progressos para você",
                          "description": "A mechanic that lets one user's efforts or actions benefit another user",
                        },
                        {
                          "id": "T14",
                          "tecnica": "Dessert Oasis",
                          "technique": "Dessert Oasis",
                          "descricao": "Um ponto visualmente óbvio entranhado em um projeto de monotonia",
                          "description": "A visually obvious spot ingrained into a design of monotony",
                        },
                        {
                          "id": "T16",
                          "tecnica": "Earned Lunch",
                          "technique": "Earned Lunch",
                          "descricao": "Ações diretas que levam a uma recompensa específica",
                          "description": "Direct actions that lead to a specific and anticipated reward",
                        },
                        {
                          "id": "T13",
                          "tecnica": "Glowing Choice",
                          "technique": "Glowing Choice",
                          "descricao": "Uma opção que é visualmente enfatizada para mostrar o que o jogador deve fazer",
                          "description": "An option that is visually emphasized to show what users should do",
                        },
                        {
                          "id": "T19",
                          "tecnica": "High-Five",
                          "technique": "High-Five",
                          "descricao": "Recompensa que é dada depois de superar um desafio pequeno e rápido",
                          "description": "Emotional Reward that is given after overcoming a small quick challenge",
                        },
                        {
                          "id": "T23",
                          "tecnica": "Step-by-Step Tutorial",
                          "technique": "Step-by-Step Tutorial",
                          "descricao": "Um tutorial passo a passo de sobreposição que orienta o usuário lentamente para onde ir",
                          "description": "A step by step overlay tutorial that slowly guides the user where to go",
                        },
                        {
                          "id": "T20",
                          "tecnica": "Coroar",
                          "technique": "Crowning",
                          "descricao": "Recompensa que é dada após superar um desafio grande e demorado",
                          "description": "Emotional Reward that is given after overcome a big long challenge",
                        },
                        {
                          "id": "T10",
                          "tecnica": "Medalhas",
                          "technique": "Badges",
                          "descricao": "Representações visuais de conquistas como Medalhas, Troféus etc.",
                          "description": "Badges, Trophies etc.",
                        },
                    ]
                },

                {
                  "motivacao": "Empoderamento & Feedback",
                  "core-drive": "Empowerment of Creativity & Feedback",
                    "id": 3,
                    "techniques":[
                        {
                          "id": "T28",
                          "tecnica": "Chain Combos",
                          "technique": "Chain Combos",
                          "descricao": "Um conjunto de ações que vai produzir um efeito maior do que a soma",
                          "description": "A list of actions that would produce a greater effect than the sum",
                        },
                        {
                          "id": "T25",
                          "tecnica": "Sempre Verde",
                          "technique": "Evergreen Mechanics",
                          "descricao": "Conjunto de ítens/ações que possibilita infinitas combinações sem perder a diversão",
                          "description": "Set of items/actions that has infinite combos without losing the fun",
                        },
                        {
                          "id": "T26",
                          "tecnica": "General’s Carrot",
                          "technique": "General’s Carrot",
                          "descricao": "Dar ao jogador opções (limitadas) de ferramentas para usar a criatividade",
                          "description": "Giving users a selection (but limited) tools to be creative on",
                        },
                        {
                          "id": "T29",
                          "tecnica": "Instant feedback",
                          "technique": "Instant feedback",
                          "descricao": "Permitir ao jogador reconhecer imediatamente os resultados do seu trabalho",
                          "description": "Allowing users to immediately recognize the results of their work",
                        },
                        {
                          "id": "T32",
                          "tecnica": "Poison Picker/Choice Perception",
                          "technique": "Poison Picker/Choice Perception",
                          "descricao": "Dar explicitamente aos jogadores a opção de dizer não para as ações desejadas.",
                          "description": "Explicitly giving users the ability to say no towards the desired actions.",
                        },
                        {
                          "id": "T27",
                          "tecnica": "Real-Time Control",
                          "technique": "Real-Time Control",
                          "descricao": "Usuários de controlar opções em tempo real para o Desafio",
                          "description": "Users to control options in real-time towards the win-state",
                        },
                        {
                          "id": "T35",
                          "tecnica": "Boosters",
                          "technique": "Boosters",
                          "descricao": "Itens que deixam o jogador mais poderoso e eficaz por um certo tempo",
                          "description": "Items that make something else more powerful or effective",
                        },
                        {
                          "id": "T34",
                          "tecnica": "Milestone Unlock",
                          "technique": "Milestone Unlock",
                          "descricao": "Etapa atingida que abre novas possibilidades",
                          "description": "A non-trivial win-state that unlocks new possibilties",
                        },
                    ]
                },
                {
                  "motivacao": "Significado Épico & Chamado",
                  "core-drive": "Epic Meaning & Calling",
                    "id": 1,
                    "techniques":[
                        {
                          "id": "T04",
                          "tecnica": "Elitismo",
                          "technique": "Elitism",
                          "descricao": "O jogador se sente especial por fazer parte de um determinado grupo",
                          "description": "The user feels special about being part of a certain group",
                        },
                        {
                          "id": "T05",
                          "tecnica": "Herói da Humanidade",
                          "technique": "Humanity Hero",
                          "descricao": "Convencer o usuário que ele está salvando o mundo ao realizar a ação desejada",
                          "description": "Persuading the user that he is saving the world by commiting the desired action",
                        },
                        {
                          "id": "T01",
                          "tecnica": "Narrativa",
                          "technique": "Narrative",
                          "descricao": "Adicionar uma história que gera um contexto para o comportamento alvo",
                          "description": "Adding a story that generates a context towards the Win-State",
                        },
                        {
                          "id": "T02",
                          "tecnica": "Sorte de Principiante",
                          "technique": "Beginners Luck",
                          "descricao": "O jogador conquista algo facilmente que outros precisam trabalhar duro para alcançar",
                          "description": "The early user achieves something easily that others need to work hard to achieve",
                        },
                        {
                          "id": "T07",
                          "tecnica": "Predestinado",
                          "technique": "Destiny Child",
                          "descricao": "O jogador sente que foi pré destinado no mundo para realizar a tarefa que se apresenta",
                          "description": "The user feeds uniquely destined in the world to accomplish the task going forward",
                        },
                        {
                          "id": "T03",
                          "tecnica": "Almoço Grátis",
                          "technique": "Free Lunch",
                          "descricao": "O jogador obtém algo de graça que em outra situação ele teria que pagar",
                          "description": "The user obtains something easily that should otherwise be difficult",
                        },
                    ]
                },

                {
                  "motivacao": "Propriedade & Posse",
                  "core-drive": "Ownership & Possession",
                    "id": 4,
                    "techniques":[
                        {
                          "id": "T36",
                          "tecnica": "Coisas Virtuais",
                          "technique": "Virtual Goods",
                          "descricao": "Itens virtuais que os jogadores podem adquirir",
                          "description": "Virtual Items that users can obtain and possess",
                        },
                        {
                          "id": "T42",
                          "tecnica": "Avatar",
                          "technique": "Avatar",
                          "descricao": "Ter uma representação virtual de si mesmo",
                          "description": "Having a virtual representation of yourself",
                        },
                        {
                          "id": "T41",
                          "tecnica": "Efeito Alfred",
                          "technique": "Alfred Effect",
                          "descricao": "Um sistema que continua a aprender sobre o jogador e entende suas preferências",
                          "description": "A system that continues to learn about the user and understands his/her preferences",
                        },
                        {
                          "id": "T37",
                          "tecnica": "Construir do Zero",
                          "technique": "Build from Scratch",
                          "descricao": "As pessoas se preocupam mais com coisas que eles investiram algum tempo para ajudar a criar",
                          "description": "People care more about things they invested time into creating",
                        },
                        {
                          "id": "T38",
                          "tecnica": "Coleção",
                          "technique": "Collection Set",
                          "descricao": "Um conjunto de ítens que só estará completo se todos estiverem reunidos",
                          "description": "A set of items that would only be complete if all were gathered",
                        },
                        {
                          "id": "T39",
                          "tecnica": "Pontos Trocáveis",
                          "technique": "Exchangeable Points",
                          "descricao": "Pontos que podem ser trocados e podem fazer rodar a economia",
                          "description": "Points that can be exchanged and can run an economy",
                        },
                        {
                          "id": "T40",
                          "tecnica": "Monitor Attachment",
                          "technique": "Monitor Attachment",
                          "descricao": "Ao monitorar o desempenho de alguma coisa, você começa a se preocupar com isso",
                          "description": "By monitoring the performance for something, you start to care about it",
                        },
                        {
                          "id": "T44",
                          "tecnica": "Protection",
                          "technique": "Protection",
                          "descricao": "Ao proteger alguma coisa, você desenvolver um apego por esta coisa",
                          "description": "By protecting something, you develop an attachment to it",
                        },
                    ]
                },
                {
                  "motivacao": "Escassez & Impaciência",
                  "core-drive": "Scarcity & Impatience",
                    "id": 6,
                    "techniques":[
                        {
                          "id": "T67",
                          "tecnica": "Contagem Regressiva",
                          "technique": "Countdown Timer",
                          "descricao": "Uma contagem regressiva que mostra o fim ou início de uma oportunidade",
                          "description": "A countdown feedback mechanic that shows an end or beginning of an opportunity",
                        },
                        {
                          "id": "T60",
                          "tecnica": "Appointment Dynamics",
                          "technique": "Appointment Dynamics",
                          "descricao": "Um momento exato e absoluto para agir quando algo acontece",
                          "description": "An exact absolute time to tune in when something happens",
                        },
                        {
                          "id": "T62",
                          "tecnica": "Dangling",
                          "technique": "Dangling",
                          "descricao": "Constantemente mostrar ao usuário algo que eles ainda não podem ter",
                          "description": "Consistently showing the user something they can't have yet",
                        },
                        {
                          "id": "T71",
                          "tecnica": "Evolved UI",
                          "technique": "Evolved UI",
                          "descricao": "Dar às pessoas menos opções no início e aumentar as opções à medida que avançam",
                          "description": "Giving people less options at the beginning and increasing it as they go",
                        },
                        {
                          "id": "T63",
                          "tecnica": "Anchor Juxtaposition",
                          "technique": "Anchor Juxtaposition",
                          "descricao": "Pegar 2 opções, uma de curto prazo, e outra de longo prazo",
                          "description": "Hold 2 Options together, one short term costly, the other time consuming",
                        },
                        {
                          "id": "T69",
                          "tecnica": "Moats",
                          "technique": "Moats",
                          "descricao": "Uma oportunidade bloqueada que pode ser contornada através de habilidade ou planejamento",
                          "description": "An opportunity blocked that can be bypassed through skill or planning",
                        },
                        {
                          "id": "T70",
                          "tecnica": "Torture Breaks",
                          "technique": "Torture Breaks",
                          "descricao": "Uma pausa repentina para as ações desejadas por um tempo limitado",
                          "description": "A sudden pause to the Desired Actions for a limited time",
                        },
                    ]
                },

                {
                  "motivacao": "Influência Social & Pertencimento",
                  "core-drive": "Social Influence & Relatedness",
                    "id": 5,
                    "techniques":[
                        {
                          "id": "T53",
                          "tecnica": "Ancora de Conformidade",
                          "technique": "Conformity Anchor",
                          "descricao": "Exibindo uma norma social para que as pessoas tendam para esse",
                          "description": "Displaying a social norm so people move towards that",
                        },
                        {
                          "id": "T50",
                          "tecnica": "Desafio em Grupo",
                          "technique": "Group Quest",
                          "descricao": "Missões que só podem ser concluídos em grupo",
                          "description": "Quests that can only be completed in a group",
                        },
                        {
                          "id": "T48",
                          "tecnica": "Vangloriar-se",
                          "technique": "Brag Buttons",
                          "descricao": "Uma ação que permite ao usuário mostrar explicitamente às pessoas coisas que ele(a) está orgulhosa de",
                          "description": "An action that allows the user to explicitly show people things s/he is proud of",
                        },
                        {
                          "id": "T51",
                          "tecnica": "Presentear (Tesouro Social)",
                          "technique": "Gifting (Social Treasure)",
                          "descricao": "Incentivo que só pode ser recebido se outros usuários dão a você",
                          "description": "Incentives that can only be received if other users give to you",
                        },
                        {
                          "id": "T47",
                          "tecnica": "Mentorship",
                          "technique": "Mentorship",
                          "descricao": "Um mentor experiente ajuda um novato com tarefas",
                          "description": "An experienced mentor helps a newbie with tasks",
                        },
                        {
                          "id": "T52",
                          "tecnica": "Social Prod",
                          "technique": "Social Prod",
                          "descricao": "Ação ocasional que estabelece um pequeno engajamento social",
                          "description": "A quick casual action that establishes a low commitment social engagement",
                        },
                        {
                          "id": "T54",
                          "tecnica": "Water Cooler",
                          "technique": "Water Cooler",
                          "descricao": "Um lugar para pessoas conversarem de forma aleatória, como um Fórum",
                          "description": "A place for people to randomly chat, such as Forum",
                        },
                        {
                          "id": "T56",
                          "tecnica": "See-Saw Bump",
                          "technique": "See-Saw Bump",
                          "descricao": "Lowering a frame of reference to bump the sentiment of something higher.",
                          "description": "Lowering a frame of reference to bump the sentiment of something higher.",
                        },
                        {
                          "id": "T59",
                          "tecnica": "Thank-You Economy",
                          "technique": "Thank-You Economy",
                          "descricao": "Um ambiente de generosidade e reciprocidade",
                          "description": "A environment of generosity and reciprication",
                        },
                    ]
                },
                {
                  "motivacao": "Perda & rejeição",
                  "core-drive": "Loss & avoidance",
                    "id": 8,
                    "techniques":[
                        {
                          "id": "T91",
                          "tecnica": "Lápide de Sepultura",
                          "technique": "Visual Grave",
                          "descricao": "Mostrar ao jogador gráficos desmotivadores quando ele não conseguir completar um desafio",
                          "description": "Show users unspiring graphics when they fail to achieve the win-state",
                        },
                        {
                          "id": "T84",
                          "tecnica": "Evanescence Opportunity",
                          "technique": "Evanescence Opportunity",
                          "descricao": "Uma oportunidade que obviamente desaparece após um período de tempo",
                          "description": "An opportunity that is obviously disappearing after a time period",
                        },
                        {
                          "id": "T87",
                          "tecnica": "Medo de Perder",
                          "technique": "FOMO Punch",
                          "descricao": "Esbofeteando alguém com o medo de perder",
                          "description": "Slapping someone with the Fear-Of-Missing-Out",
                        },
                        {
                          "id": "T89",
                          "tecnica": "Lost Progress",
                          "technique": "Lost Progress",
                          "descricao": "Deduzindo o progresso de um usuário investiu tempo nisso",
                          "description": "Deducting the progress a user invested time into",
                        },
                        {
                          "id": "T86",
                          "tecnica": "Status Quo Sloth",
                          "technique": "Status Quo Sloth",
                          "descricao": "Rejeição de qualquer mudança devido à preguiça",
                          "description": "Setup that creates avoidance of any change due to laziness",
                        },
                        {
                          "id": "T88",
                          "tecnica": "Sunk-Cost Tragedy",
                          "technique": "Sunk-Cost Tragedy",
                          "descricao": "Um sentimento de perda potencial, onde os usuários vão sofrer todo o progresso e bens no sistema, se sair do sistema",
                          "description": "A potential feeling of loss where users will suffer ALL progress and possessions in the system if they quit the system",
                        },
                    ]
                }
              ];

            return framework;
        }
    }
})();

