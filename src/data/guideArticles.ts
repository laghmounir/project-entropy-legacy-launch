import battleImage from "@/assets/gameplay-battle.jpg";
import exploreImage from "@/assets/gameplay-explore.jpg";
import mechaImage from "@/assets/feature-combat.jpg";
import techImage from "@/assets/gameplay-tech.jpg";
import cityImage from "@/assets/gameplay-city.jpg";
import factionImage from "@/assets/faction-void.jpg";
import fleetImage from "@/assets/feature-squad.jpg";
import allianceImage from "@/assets/alliance-competitive.jpg";
import baseImage from "@/assets/feature-base.jpg";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: { src: string; alt: string; caption: string };
};

export type GuideArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  dek: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  quickAnswer: string;
  facts: Array<{ label: string; value: string }>;
  sections: GuideSection[];
  sourceUrl: string;
  sourceLabel: string;
  sourceNote: string;
  relatedSlugs: string[];
};

const steamUrl = "https://store.steampowered.com/app/2806410/Project_Entropy/";
const stellarisUrl = "https://store.steampowered.com/app/281990/Stellaris/";

export const organicGuides: GuideArticle[] = [
  {
    slug: "project-entropy-system-requirements",
    eyebrow: "Guide 02 // PC check",
    title: "Project Entropy system requirements: can your PC run it?",
    seoTitle: "Project Entropy System Requirements for Windows PC | EntropyPC",
    description: "Check the published Project Entropy PC requirements, the practical Windows baseline and what to verify before you start playing.",
    dek: "A simple requirements check for Windows players who want the facts before committing time to a new sci-fi strategy game.",
    readTime: "4 min read",
    heroImage: techImage,
    heroAlt: "Futuristic Project Entropy technology and command systems",
    quickAnswer: "The Steam listing asks for a 64-bit Windows system, 4 GB of RAM, a DirectX 10 graphics card, broadband internet and 8 GB of available storage. Steam itself currently requires Windows 10 or later, so Windows 10/11 is the practical starting point even though the listed game requirement says Windows 7 SP1 or better.",
    facts: [
      { label: "Operating system", value: "64-bit Windows" },
      { label: "Memory", value: "4 GB RAM minimum" },
      { label: "Storage", value: "8 GB available" },
      { label: "Connection", value: "Broadband internet" },
    ],
    sections: [
      { id: "published-baseline", title: "The published minimum baseline", paragraphs: ["The official Steam page lists a 64-bit processor and operating system, Windows 7 SP1 or better, 4 GB of RAM, a GTX 460 or Radeon HD 4400-class graphics card, DirectX 10, broadband internet and 8 GB of storage.", "Those are the numbers to compare first. They are not a promise of identical frame rates on every machine, especially in a connected strategy game with changing content."], bullets: ["64-bit processor and operating system", "Intel Core 2 Duo e6400 or AMD Athlon x64 4000+ class processor", "Nvidia GTX 460 or Radeon HD 4400 class graphics", "DirectX 10 and broadband internet"], image: { src: baseImage, alt: "Project Entropy base and command structures", caption: "Start with the published minimum, then leave headroom for updates and background applications." } },
      { id: "practical-check", title: "What to check on your Windows PC", paragraphs: ["A requirements page is useful only when translated into a quick personal check. Confirm your Windows edition is 64-bit, look at available storage rather than total disk size and close heavy background applications before judging performance.", "Because Project Entropy lists online PvP and co-op features, a stable connection matters as much as the graphics card. Wi-Fi quality, latency and other traffic can affect the experience even when the hardware passes the minimum list."], bullets: ["Open Windows System Information and confirm 64-bit support.", "Leave more than the listed storage minimum when possible.", "Use a stable broadband connection for online sessions.", "Recheck the current store listing because requirements can change."] },
      { id: "before-starting", title: "The short decision", paragraphs: ["If your PC is comfortably above the listed baseline, the next question is whether you enjoy the game loop: exploration, base or territory growth, hero fleets and online conflict. Hardware is only the first filter.", "For a current access check, use the official route and confirm the details for your own Windows setup before starting."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "Requirements and client support can change. This article paraphrases the public Steam listing and is not a hardware guarantee.",
    relatedSlugs: ["project-entropy-pc", "project-entropy-gameplay", "is-project-entropy-free-to-play"],
  },
  {
    slug: "project-entropy-pc",
    eyebrow: "Guide 03 // Windows PC",
    title: "How to start Project Entropy on Windows PC",
    seoTitle: "Project Entropy on PC: Windows Access Guide | EntropyPC",
    description: "A clear Windows PC guide to checking access, system compatibility and the first practical steps for Project Entropy.",
    dek: "Know what to verify before you enter the galaxy: platform, account route, connection and the first session objective.",
    readTime: "4 min read",
    heroImage: battleImage,
    heroAlt: "Project Entropy space battle on PC",
    quickAnswer: "Project Entropy is listed on Steam as a free-to-play Windows game with online multiplayer features. The safest starting process is to confirm the current access route, check your 64-bit Windows setup, verify storage and connection, then decide what you want from the first session.",
    facts: [{ label: "Platform", value: "Windows PC" }, { label: "Client", value: "Steam listing" }, { label: "Online modes", value: "PvP and co-op" }, { label: "First check", value: "Current access details" }],
    sections: [
      { id: "platform-first", title: "Start with the platform check", paragraphs: ["The official listing identifies Project Entropy as a Windows title and specifies a 64-bit operating system. It also lists online features, so access is not only a question of installing a client; your network and account path matter too.", "Use the current store or access page as the source of truth. Campaign links and old articles can age quickly when a game changes its distribution flow."], image: { src: techImage, alt: "Project Entropy technology interface", caption: "The practical PC question is platform, access route and connection—not just graphics." } },
      { id: "first-session", title: "Plan the first session before you start", paragraphs: ["A first session is easier when you choose one goal. You might want to understand the map, follow the early progression, inspect fleet roles or see how the multiplayer layer works. Trying to optimise everything at once creates noise.", "Keep the first decisions reversible where possible. Learn the interface, note the resources the game asks you to manage and avoid treating an early tutorial choice as a permanent meta commitment."], bullets: ["Confirm the current access route.", "Check that your Windows system meets the published baseline.", "Choose one learning goal for session one.", "Record questions for the next guide instead of guessing."] },
      { id: "access-safety", title: "Keep the access decision transparent", paragraphs: ["Availability, requirements and monetisation details can change. A useful player guide should make that uncertainty visible and send readers to a current access page rather than promising a result it cannot verify.", "That is also why this site uses an editorial explanation first and keeps the Start Playing action separate from the factual checklist."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "The access flow may change. Verify the current store and platform details before starting.",
    relatedSlugs: ["project-entropy-system-requirements", "project-entropy-gameplay", "is-project-entropy-free-to-play"],
  },
  {
    slug: "project-entropy-gameplay",
    eyebrow: "Guide 04 // Gameplay",
    title: "Project Entropy gameplay explained: what do you actually do?",
    seoTitle: "Project Entropy Gameplay Explained: Core Loop and Modes | EntropyPC",
    description: "Understand the Project Entropy gameplay loop: civilizations, exploration, hero fleets, mechs, PvP and PvE.",
    dek: "A player-first breakdown of the systems named in the official listing, without pretending the game is something it is not.",
    readTime: "5 min read",
    heroImage: exploreImage,
    heroAlt: "Project Entropy exploration scene",
    quickAnswer: "Project Entropy combines sci-fi strategy and role-playing elements with exploration, civilization management, hero fleets, customisable mechs and online PvP/PvE activity. The core loop is long-term planning: expand, build a force, improve it and choose where to commit it.",
    facts: [{ label: "Core fantasy", value: "Command the galaxy" }, { label: "Strategy layer", value: "Civilizations and expansion" }, { label: "Combat layer", value: "Hero fleets and mechs" }, { label: "Online layer", value: "PvP, PvE and co-op" }],
    sections: [
      { id: "command-and-expand", title: "Command, explore and expand", paragraphs: ["The listing frames the game around alien civilizations, uncharted planets and the expansion of an empire. That makes the map part of the decision-making: exploration is not only scenery, it is where you discover the next target, resource or problem.", "The game is therefore a better fit for players who enjoy a gradual strategy arc than for players looking only for short, isolated battles."], image: { src: exploreImage, alt: "Project Entropy exploration and planetary scene", caption: "Exploration is one of the official pillars of the Project Entropy loop." } },
      { id: "fleets-and-mechs", title: "Build a force, then tune it", paragraphs: ["Hero ships, fleets, mechs and high-tech weapons form the customisation layer. The important player question is not simply which item is strongest; it is which combination supports the way you want to approach a fight.", "The official description does not provide a complete current meta. Treat early builds as experiments, watch what fails and improve the specific weakness instead of copying an unverified tier list."], bullets: ["Choose a clear role for each fleet.", "Change one variable at a time when testing upgrades.", "Use safer encounters to learn before committing to high-risk PvP.", "Recheck the current game information before treating a build as permanent."], image: { src: mechaImage, alt: "Project Entropy mecha combat", caption: "Mechs and weapons add a tuning layer to the fleet strategy." } },
      { id: "online-loop", title: "Where multiplayer fits", paragraphs: ["Steam lists online PvP, online co-op and MMO features. That means the long-term loop can extend beyond personal progression into competition, cooperation and the timing of shared objectives.", "If you prefer a completely offline or self-contained campaign, the multiplayer requirement is an important fit check before you start."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "The article explains the systems described publicly by the developer and publisher; exact balance and seasonal content can change.",
    relatedSlugs: ["project-entropy-beginner-guide", "project-entropy-pvp-pve-coop", "project-entropy-hero-fleets"],
  },
  {
    slug: "project-entropy-beginner-guide",
    eyebrow: "Guide 05 // First session",
    title: "Project Entropy beginner guide: a low-waste first session",
    seoTitle: "Project Entropy Beginner Guide: First Session Checklist | EntropyPC",
    description: "A practical Project Entropy beginner guide for choosing a first goal, learning the loop and avoiding wasteful early decisions.",
    dek: "The first session should teach you how the systems connect—not force you to chase an unverified build order.",
    readTime: "5 min read",
    heroImage: cityImage,
    heroAlt: "Project Entropy futuristic base and city",
    quickAnswer: "Start by learning the interface and the progression loop, then choose one short-term goal: exploration, base growth, fleet building or multiplayer. Keep resources flexible until you understand what your account and playstyle need.",
    facts: [{ label: "First objective", value: "Learn the loop" }, { label: "Early priority", value: "Flexible resources" }, { label: "Combat habit", value: "Test before committing" }, { label: "Social step", value: "Join when ready" }],
    sections: [
      { id: "first-ten-minutes", title: "Your first ten minutes", paragraphs: ["Do not begin with a spreadsheet. Begin by identifying the main screens: map or exploration, base or territory, fleet management and missions. The goal is to understand where decisions live.", "Write down the names of resources and upgrades that appear repeatedly. That small list becomes more useful than a generic beginner build copied from another game."], bullets: ["Find the map and the main progression screen.", "Identify the first fleet or hero-management screen.", "Read the current mission text instead of skipping every explanation.", "Note which choices are reversible."], image: { src: cityImage, alt: "Project Entropy base management scene", caption: "A strong first session maps the systems before it tries to optimise them." } },
      { id: "choose-a-goal", title: "Pick one early goal", paragraphs: ["Project Entropy presents several attractive directions: expansion, fleets, heroes, weapons, exploration and online conflict. Trying to maximise all of them at once can make the early game feel unfocused.", "Choose one goal for the next few sessions. If you like planning, build around a small fleet core. If you like discovery, prioritise the map and exploration. If you want social play, learn the alliance and co-op layer before chasing a competitive ranking."] },
      { id: "avoid-waste", title: "Avoid the common early mistakes", paragraphs: ["The safest beginner principle is to avoid irreversible spending until you understand the system it improves. The official listing confirms broad systems, but it does not publish a universal best build for every player.", "Use PvE or lower-risk activity as a place to test a change. When a fleet fails, diagnose the problem—survivability, damage, timing or target choice—before replacing everything."], bullets: ["Do not treat a third-party tier list as official information.", "Keep a flexible reserve for the next objective.", "Test one upgrade change at a time.", "Join a community only when its advice matches your own version and goals."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "This is an independent framework for new players, not an official build order or guarantee of the current meta.",
    relatedSlugs: ["project-entropy-gameplay", "project-entropy-hero-fleets", "project-entropy-pvp-pve-coop"],
  },
  {
    slug: "project-entropy-factions",
    eyebrow: "Guide 06 // Civilizations",
    title: "Project Entropy factions and civilizations: what we know",
    seoTitle: "Project Entropy Factions and Civilizations Explained | EntropyPC",
    description: "What the public Project Entropy listing confirms about alien civilizations, abilities, technologies and units.",
    dek: "A careful look at the civilization layer without inventing faction names, tiers or mechanics that the public listing does not confirm.",
    readTime: "4 min read",
    heroImage: factionImage,
    heroAlt: "Project Entropy alien civilization concept",
    quickAnswer: "The official listing says Project Entropy lets players command alien civilizations, each with unique abilities, technologies and units. It does not provide enough verified public detail for a reliable faction tier list, so the useful starting point is to compare playstyle and role rather than chase a ranking.",
    facts: [{ label: "Layer", value: "Civilization choice" }, { label: "Differences", value: "Abilities and technologies" }, { label: "Units", value: "Faction-specific options" }, { label: "Safe advice", value: "Test your playstyle" }],
    sections: [
      { id: "what-is-confirmed", title: "What is actually confirmed", paragraphs: ["The store description says that each civilization has unique abilities, technologies and units. That is enough to establish meaningful differentiation, but not enough to claim that one civilization is always best.", "A responsible guide should separate the confirmed structure from the details that need current in-game testing. This page stays on the confirmed side of that line."], image: { src: factionImage, alt: "Project Entropy faction visual", caption: "Civilization identity is part of the strategy layer, but exact balance should be checked in the current game." } },
      { id: "choose-a-fit", title: "Choose a fit, not a tier list", paragraphs: ["If you enjoy planning and technology paths, compare the options by the kind of decisions they encourage. If you like direct pressure, look for unit and ability combinations that support an active tempo. If you prefer long-term expansion, consider how a choice supports map control and sustained progression.", "The right choice is the one that keeps your decisions understandable while you learn the wider system. A powerful option you do not understand is less useful than a coherent option you can improve."] },
      { id: "how-to-test", title: "How to test a civilization responsibly", paragraphs: ["Use a short test loop: play a few early objectives, note the resources and units you rely on, then compare how the same goal feels with another option. Avoid changing several variables at once.", "When official patch notes or current in-game data become available, this article can be updated. Until then, treat exact faction rankings online as opinions rather than facts."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "The public listing confirms the civilization structure but not a complete current faction roster or balance ranking.",
    relatedSlugs: ["project-entropy-beginner-guide", "project-entropy-gameplay", "project-entropy-hero-fleets"],
  },
  {
    slug: "project-entropy-hero-fleets",
    eyebrow: "Guide 07 // Fleet building",
    title: "Project Entropy hero fleets and mechs: how to think about builds",
    seoTitle: "Project Entropy Hero Fleets and Mechs Guide | EntropyPC",
    description: "Learn the public Project Entropy fleet and mech systems, with a practical way to test roles without relying on unverified tier lists.",
    dek: "Build around a clear role, test one change at a time and let the battle tell you what needs fixing.",
    readTime: "5 min read",
    heroImage: fleetImage,
    heroAlt: "Project Entropy hero fleet formation",
    quickAnswer: "Project Entropy describes hero ships with different abilities and attributes, plus customisable mechs and high-tech weapons. The best early approach is to define a fleet role, keep the core compact and diagnose failures before spending resources on a complete rebuild.",
    facts: [{ label: "Fleet layer", value: "Hero ships" }, { label: "Customisation", value: "Mechs and weapons" }, { label: "Testing ground", value: "Lower-risk encounters" }, { label: "Best habit", value: "Change one variable" }],
    sections: [
      { id: "build-around-role", title: "Start with a fleet role", paragraphs: ["A fleet becomes easier to understand when it has one job. You might be building for sustained pressure, defence, exploration or a particular encounter type. The role tells you what evidence to look for after a battle.", "The official listing confirms hero fleets, abilities and attributes, but it does not publish a complete current meta. That is why this guide focuses on a repeatable testing method rather than a fake universal build."], image: { src: fleetImage, alt: "Project Entropy fleet and hero units", caption: "A clear fleet role makes every upgrade easier to evaluate." } },
      { id: "diagnose-failure", title: "Diagnose the failure before rebuilding", paragraphs: ["After a loss, ask what actually stopped the fleet. Did it run out of survivability, fail to deal enough damage, arrive at the wrong time or choose a poor target? Each answer points to a different adjustment.", "Replacing every hero, weapon and mech at the same time feels decisive, but it removes the information you need to learn. Test one change, run the same type of encounter and compare."], bullets: ["Survivability: the fleet collapses before its plan starts.", "Damage: the fight lasts too long or misses a timing window.", "Timing: the right tools arrive too late.", "Targeting: the fleet is solving the wrong problem."] },
      { id: "pve-before-pvp", title: "Use PvE to learn before high-stakes PvP", paragraphs: ["PvE encounters are a useful place to learn how a build behaves without turning every experiment into a competitive loss. Once you understand the role and its limits, you can decide whether it deserves a place in PvP or alliance play.", "Keep notes short: objective, fleet role, result and one change for the next attempt. That is enough to build your own evidence."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "This article does not claim a current best build. Balance, heroes, equipment and modes can change.",
    relatedSlugs: ["project-entropy-gameplay", "project-entropy-beginner-guide", "project-entropy-pvp-pve-coop"],
  },
  {
    slug: "project-entropy-pvp-pve-coop",
    eyebrow: "Guide 08 // Online modes",
    title: "Project Entropy PvP, PvE and co-op explained",
    seoTitle: "Project Entropy PvP, PvE and Co-op: What to Expect | EntropyPC",
    description: "Understand the Project Entropy online modes listed on Steam, from PvP competition to PvE encounters and co-op play.",
    dek: "Choose the mode that matches your appetite for pressure, preparation and teamwork.",
    readTime: "4 min read",
    heroImage: allianceImage,
    heroAlt: "Project Entropy competitive alliance scene",
    quickAnswer: "The Steam listing advertises online PvP, online co-op and PvE activity. PvP is the competitive pressure test, PvE is the safer place to learn and co-op adds shared planning with other players. The best first mode depends on whether you want competition, experimentation or teamwork.",
    facts: [{ label: "PvP", value: "Competitive online play" }, { label: "PvE", value: "Encounters and practice" }, { label: "Co-op", value: "Shared objectives" }, { label: "Requirement", value: "Stable internet" }],
    sections: [
      { id: "three-modes", title: "Three ways to read the online loop", paragraphs: ["PvP asks you to prepare for another player’s decisions. It rewards scouting, timing and an honest understanding of what your fleet can do. PvE is more forgiving as a learning environment, where you can test composition and upgrades with clearer feedback.", "Co-op sits between the two: the challenge is shared, but communication and role clarity become part of the strategy. A strong co-op session is not just several players using their best units independently."], image: { src: allianceImage, alt: "Project Entropy alliance and multiplayer scene", caption: "Online strategy is also coordination: who takes which role, and when?" } },
      { id: "where-to-start", title: "Where should a new player start?", paragraphs: ["Start with PvE or the least punishing available objective while you learn the interface. Move into co-op when you can explain your fleet’s role to a teammate. Enter PvP when you are comfortable learning from a loss without changing every part of the build.", "This sequence is not a rule; it is a low-waste way to build information before competition makes every experiment more expensive."], bullets: ["PvE: learn the loop and test upgrades.", "Co-op: practise roles, timing and communication.", "PvP: apply a known plan and review what failed."] },
      { id: "connection-and-time", title: "Check the time and connection commitment", paragraphs: ["Online modes need a stable connection and can ask for more continuous attention than a purely offline game. Set expectations before you join a group or commit to a competitive objective.", "If you want a relaxed strategy experience, keep your first session focused on understanding the systems rather than chasing every social or seasonal objective at once."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "Mode availability and event structure can change. This guide summarises the public listing rather than promising a specific current activity.",
    relatedSlugs: ["project-entropy-hero-fleets", "project-entropy-beginner-guide", "project-entropy-gameplay"],
  },
  {
    slug: "is-project-entropy-free-to-play",
    eyebrow: "Guide 09 // Pricing check",
    title: "Is Project Entropy free to play? What the listing says",
    seoTitle: "Is Project Entropy Free to Play? Pricing and Access | EntropyPC",
    description: "A transparent answer about Project Entropy’s free-to-play listing, in-app purchases and what players should still verify.",
    dek: "Free to start does not mean every question about access, purchases or requirements disappears.",
    readTime: "3 min read",
    heroImage: baseImage,
    heroAlt: "Project Entropy futuristic base and free-to-play strategy scene",
    quickAnswer: "Yes. Steam lists Project Entropy as Free To Play and also lists in-app purchases. Players should still check the current access route, system requirements and any purchase or account details before starting.",
    facts: [{ label: "Store label", value: "Free To Play" }, { label: "Purchases", value: "In-app purchases listed" }, { label: "Platform", value: "Windows PC" }, { label: "Online", value: "PvP and co-op listed" }],
    sections: [
      { id: "free-means", title: "What free-to-play confirms—and what it does not", paragraphs: ["The Steam page uses the Free To Play label. That answers the entry-price question, but it does not promise that every item, speed-up or cosmetic is free, and it does not freeze the game’s commercial model forever.", "Steam also lists in-app purchases. Read that as a reason to check the current store and account information, not as a reason to assume a particular payment requirement."], image: { src: baseImage, alt: "Project Entropy base-building scene", caption: "The useful distinction is free to start versus every optional purchase being free." } },
      { id: "before-starting", title: "Three checks before you start", paragraphs: ["First, confirm that your Windows PC meets the published baseline. Second, confirm the current access route and online requirements. Third, decide what you are comfortable spending—if anything—before the game presents optional purchases.", "A good player decision is informed and reversible. You do not need to rush because an access page uses urgency language."], bullets: ["Check the current system requirements.", "Use the current access page rather than an old mirror.", "Review the purchase model in the live store interface.", "Set your own spending boundary before playing."] },
      { id: "good-fit", title: "Who is the model a good fit for?", paragraphs: ["The model can suit players who enjoy a persistent online strategy game and want to try the core loop before deciding how deeply to invest time or money. It is a weaker fit if you want a completely offline experience or a single fixed purchase with no optional economy."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "Free-to-play labels, purchase options and access conditions can change. Recheck the live store before making a decision.",
    relatedSlugs: ["project-entropy-pc", "project-entropy-system-requirements", "project-entropy-review"],
  },
  {
    slug: "project-entropy-review",
    eyebrow: "Guide 10 // Evidence check",
    title: "Project Entropy review: who is the game for?",
    seoTitle: "Project Entropy Review: Strengths, Caveats and Fit | EntropyPC",
    description: "An evidence-based Project Entropy review built from the public listing, platform details and the game’s advertised strategy loop.",
    dek: "Not hype, not a copied affiliate description: a practical fit check for players deciding whether the loop sounds like their kind of game.",
    readTime: "6 min read",
    heroImage: battleImage,
    heroAlt: "Project Entropy space battle review visual",
    quickAnswer: "Project Entropy is most interesting for players who enjoy a persistent sci-fi strategy loop: exploration, civilization management, hero fleets, customisable mechs and online conflict. The trade-off is that it asks for patience with progression and an online, free-to-play structure.",
    facts: [{ label: "Best fit", value: "Long-term strategy players" }, { label: "Core appeal", value: "Fleets and expansion" }, { label: "Trade-off", value: "Online progression loop" }, { label: "Evidence", value: "Public listing and specs" }],
    sections: [
      { id: "what-stands-out", title: "What stands out on paper", paragraphs: ["The combination is clear: alien civilizations, planets to explore, hero fleets, mechs, high-tech weapons and online PvP/PvE activity. That gives the game several layers for players who like to build toward a bigger objective instead of finishing a short campaign and leaving.", "The visual identity also leans into scale: space battles, factions and a shared galaxy are part of the pitch. Players who enjoy science-fiction strategy should understand the fantasy quickly."], image: { src: battleImage, alt: "Project Entropy battle scene", caption: "The strongest promise is the combination of scale, fleets and a persistent online strategy loop." } },
      { id: "important-caveats", title: "The caveats worth knowing", paragraphs: ["The game is online and free-to-play, with in-app purchases listed on Steam. That means the experience is not the same as an offline, one-price strategy game. The store also lists mixed user reviews, so readers should treat the public listing as an invitation to check the current experience—not a guarantee that every player will love it.", "The public description is broad. It tells us the systems the game wants to offer, but not every current balance detail, progression speed or seasonal change. Those are questions to verify in the live game."] },
      { id: "who-should-try", title: "Who should try it?", paragraphs: ["Try it if you like sci-fi settings, gradual account progression, fleet composition, map decisions and multiplayer objectives. Be cautious if you want a fully offline campaign, a short story with a fixed ending or a game with no optional economy.", "The most honest verdict is a fit verdict: the official feature set is broad enough to justify a look, but your first session should decide whether the pace and online structure work for you."] },
    ],
    sourceUrl: steamUrl,
    sourceLabel: "Project Entropy on Steam",
    sourceNote: "This is an evidence-based editorial fit check, not a claim that the author personally tested every current feature. Store reviews and live systems can change.",
    relatedSlugs: ["project-entropy-gameplay", "is-project-entropy-free-to-play", "project-entropy-vs-stellaris"],
  },
  {
    slug: "project-entropy-vs-stellaris",
    eyebrow: "Comparison 01 // Space strategy",
    title: "Project Entropy vs Stellaris: two different space-strategy loops",
    seoTitle: "Project Entropy vs Stellaris: Which Space Strategy Fits You? | EntropyPC",
    description: "Compare Project Entropy and Stellaris by platform, multiplayer structure, exploration and the kind of strategy decisions each game emphasises.",
    dek: "The useful comparison is not which title is universally better. It is whether you want a persistent online battle loop or a deeper grand-strategy sandbox.",
    readTime: "6 min read",
    heroImage: techImage,
    heroAlt: "Project Entropy science-fiction strategy comparison visual",
    quickAnswer: "Project Entropy and Stellaris both use a science-fiction strategy fantasy, but their public store descriptions point to different experiences. Project Entropy emphasises alien civilizations, hero fleets, online PvP/PvE and co-op; Stellaris emphasises a procedurally generated galaxy, exploration, diplomacy, empire design and single-player or multiplayer play.",
    facts: [{ label: "Project Entropy", value: "Online fleet strategy" }, { label: "Stellaris", value: "Grand-strategy sandbox" }, { label: "Best comparison", value: "Loop and commitment" }, { label: "Decision", value: "Choose your pace" }],
    sections: [
      { id: "same-fantasy", title: "Same sci-fi fantasy, different promise", paragraphs: ["Project Entropy presents a persistent multiplayer strategy experience built around civilizations, planets, hero fleets, mechs and PvP/PvE encounters. Its fantasy is command plus competition: grow, build a force and decide where to commit it.", "Stellaris presents a procedurally generated galaxy where players explore, encounter civilizations, shape an empire and make long-term diplomatic or military choices. Its fantasy is a broad grand-strategy sandbox where the story of the galaxy emerges from the simulation."], image: { src: techImage, alt: "Science-fiction technology comparison", caption: "Both games are about space strategy, but their decision rhythms are not identical." } },
      { id: "choose-project-entropy", title: "Choose Project Entropy if…", paragraphs: ["You want a more direct focus on hero fleets, mechs, online battles and a shared competitive/co-operative layer. The public listing makes multiplayer and fleet-building central to the pitch.", "You also enjoy a free-to-play structure and do not need the entire experience to be offline or self-contained."], bullets: ["You want online PvP and co-op to be part of the core identity.", "You like building a compact force and improving it over time.", "You want a sci-fi game with a direct fleet-and-conflict focus."] },
      { id: "choose-stellaris", title: "Choose Stellaris if…", paragraphs: ["You want a grand-strategy sandbox with procedural exploration, diplomacy, empire design and the freedom to shape a long galaxy story. Steam lists single-player and multiplayer features and presents the game as a wider empire simulation.", "The comparison is therefore about pace and scope. One is not a substitute for the other in every player’s library."], bullets: ["You want a broad empire simulation and emergent storytelling.", "You prefer a single-player option and a sandbox structure.", "You enjoy diplomacy, exploration and technology as much as direct fleet conflict."] },
    ],
    sourceUrl: `${steamUrl} | ${stellarisUrl}`,
    sourceLabel: "Project Entropy and Stellaris on Steam",
    sourceNote: "This comparison uses the public store descriptions and features. It is a loop comparison, not a complete review of either game.",
    relatedSlugs: ["project-entropy-review", "project-entropy-gameplay", "project-entropy-pvp-pve-coop"],
  },
];

export function getGuideBySlug(slug: string) {
  return organicGuides.find((article) => article.slug === slug);
}
