const keywords = ["null", "air", "spawn", "cliff", "build1", "build2", "build3", "build4", "build5", "build6", "build7", "build8", "build9", "build10", "build11", "build12", "build13", "build14", "build15", "build16", "deep-water", "shallow-water", "tainted-water", "deep-tainted-water", "darksand-tainted-water", "sand-water", "darksand-water", "tar", "pooled-cryofluid", "molten-slag", "space", "empty", "stone", "crater-stone", "char", "basalt", "hotrock", "magmarock", "sand-floor", "darksand", "dirt", "mud", "dacite", "rhyolite", "rhyolite-crater", "rough-rhyolite", "regolith", "yellow-stone", "carbon-stone", "ferric-stone", "ferric-craters", "beryllic-stone", "crystalline-stone", "crystal-floor", "yellow-stone-plates", "red-stone", "dense-red-stone", "red-ice", "arkycite-floor", "arkyic-stone", "rhyolite-vent", "carbon-vent", "arkyic-vent", "yellow-stone-vent", "red-stone-vent", "crystalline-vent", "redmat", "bluemat", "grass", "salt", "snow", "ice", "ice-snow", "shale", "moss", "core-zone", "spore-moss", "stone-wall", "spore-wall", "dirt-wall", "dacite-wall", "ice-wall", "snow-wall", "dune-wall", "regolith-wall", "yellow-stone-wall", "rhyolite-wall", "carbon-wall", "ferric-stone-wall", "beryllic-stone-wall", "arkyic-wall", "crystalline-stone-wall", "red-ice-wall", "red-stone-wall", "red-diamond-wall", "sand-wall", "salt-wall", "shrubs", "shale-wall", "spore-pine", "snow-pine", "pine", "white-tree-dead", "white-tree", "spore-cluster", "redweed", "pur-bush", "yellowcoral", "boulder", "snow-boulder", "shale-boulder", "sand-boulder", "dacite-boulder", "basalt-boulder", "carbon-boulder", "ferric-boulder", "beryllic-boulder", "yellow-stone-boulder", "arkyic-boulder", "crystal-cluster", "vibrant-crystal-cluster", "crystal-blocks", "crystal-orbs", "crystalline-boulder", "red-ice-boulder", "rhyolite-boulder", "red-stone-boulder", "metal-floor", "metal-floor-damaged", "metal-floor-2", "metal-floor-3", "metal-floor-4", "metal-floor-5", "dark-panel-1", "dark-panel-2", "dark-panel-3", "dark-panel-4", "dark-panel-5", "dark-panel-6", "dark-metal", "pebbles", "tendrils", "ore-copper", "ore-lead", "ore-scrap", "ore-coal", "ore-titanium", "ore-thorium", "ore-beryllium", "ore-tungsten", "ore-crystal-thorium", "ore-wall-thorium", "ore-wall-beryllium", "graphitic-wall", "ore-wall-tungsten", "graphite-press", "multi-press", "silicon-smelter", "silicon-crucible", "kiln", "plastanium-compressor", "phase-weaver", "surge-smelter", "cryofluid-mixer", "pyratite-mixer", "blast-mixer", "melter", "separator", "disassembler", "spore-press", "pulverizer", "coal-centrifuge", "incinerator", "silicon-arc-furnace", "electrolyzer", "atmospheric-concentrator", "oxidation-chamber", "electric-heater", "slag-heater", "phase-heater", "heat-redirector", "heat-router", "slag-incinerator", "carbide-crucible", "slag-centrifuge", "surge-crucible", "cyanogen-synthesizer", "phase-synthesizer", "heat-reactor", "copper-wall", "copper-wall-large", "titanium-wall", "titanium-wall-large", "plastanium-wall", "plastanium-wall-large", "thorium-wall", "thorium-wall-large", "phase-wall", "phase-wall-large", "surge-wall", "surge-wall-large", "door", "door-large", "scrap-wall", "scrap-wall-large", "scrap-wall-huge", "scrap-wall-gigantic", "thruster", "beryllium-wall", "beryllium-wall-large", "tungsten-wall", "tungsten-wall-large", "blast-door", "reinforced-surge-wall", "reinforced-surge-wall-large", "carbide-wall", "carbide-wall-large", "shielded-wall", "mender", "mend-projector", "overdrive-projector", "overdrive-dome", "force-projector", "shock-mine", "radar", "build-tower", "regen-projector", "shockwave-tower", "shield-projector", "large-shield-projector", "conveyor", "titanium-conveyor", "plastanium-conveyor", "armored-conveyor", "junction", "bridge-conveyor", "phase-conveyor", "sorter", "inverted-sorter", "router", "distributor", "overflow-gate", "underflow-gate", "mass-driver", "duct", "armored-duct", "duct-router", "overflow-duct", "underflow-duct", "duct-bridge", "duct-unloader", "surge-conveyor", "surge-router", "unit-cargo-loader", "unit-cargo-unload-point", "mechanical-pump", "rotary-pump", "impulse-pump", "conduit", "pulse-conduit", "plated-conduit", "liquid-router", "liquid-container", "liquid-tank", "liquid-junction", "bridge-conduit", "phase-conduit", "reinforced-pump", "reinforced-conduit", "reinforced-liquid-junction", "reinforced-bridge-conduit", "reinforced-liquid-router", "reinforced-liquid-container", "reinforced-liquid-tank", "power-node", "power-node-large", "surge-tower", "diode", "battery", "battery-large", "combustion-generator", "thermal-generator", "steam-generator", "differential-generator", "rtg-generator", "solar-panel", "solar-panel-large", "thorium-reactor", "impact-reactor", "beam-node", "beam-tower", "beam-link", "turbine-condenser", "chemical-combustion-chamber", "pyrolysis-generator", "flux-reactor", "neoplasia-reactor", "mechanical-drill", "pneumatic-drill", "laser-drill", "blast-drill", "water-extractor", "cultivator", "oil-extractor", "vent-condenser", "cliff-crusher", "plasma-bore", "large-plasma-bore", "impact-drill", "eruption-drill", "core-shard", "core-foundation", "core-nucleus", "core-bastion", "core-citadel", "core-acropolis", "container", "vault", "unloader", "reinforced-container", "reinforced-vault", "duo", "scatter", "scorch", "hail", "wave", "lancer", "arc", "parallax", "swarmer", "salvo", "segment", "tsunami", "fuse", "ripple", "cyclone", "foreshadow", "spectre", "meltdown", "breach", "diffuse", "sublimate", "titan", "disperse", "afflict", "lustre", "scathe", "smite", "malign", "ground-factory", "air-factory", "naval-factory", "additive-reconstructor", "multiplicative-reconstructor", "exponential-reconstructor", "tetrative-reconstructor", "repair-point", "repair-turret", "tank-fabricator", "ship-fabricator", "mech-fabricator", "tank-refabricator", "mech-refabricator", "ship-refabricator", "prime-refabricator", "tank-assembler", "ship-assembler", "mech-assembler", "basic-assembler-module", "unit-repair-tower", "payload-conveyor", "payload-router", "reinforced-payload-conveyor", "reinforced-payload-router", "payload-mass-driver", "large-payload-mass-driver", "small-deconstructor", "deconstructor", "constructor", "large-constructor", "payload-loader", "payload-unloader", "power-source", "power-void", "item-source", "item-void", "liquid-source", "liquid-void", "payload-source", "payload-void", "heat-source", "illuminator", "legacy-mech-pad", "legacy-unit-factory", "legacy-unit-factory-air", "legacy-unit-factory-ground", "command-center", "launch-pad", "interplanetary-accelerator", "message", "switch", "micro-processor", "logic-processor", "hyper-processor", "memory-cell", "memory-bank", "logic-display", "large-logic-display", "canvas", "reinforced-message", "world-processor", "world-cell", "world-message", "copper", "lead", "metaglass", "graphite", "sand", "coal", "titanium", "thorium", "scrap", "silicon", "plastanium", "phase-fabric", "surge-alloy", "spore-pod", "blast-compound", "pyratite", "beryllium", "tungsten", "oxide", "carbide", "fissile-matter", "dormant-cyst", "water", "slag", "oil", "cryofluid", "neoplasm", "arkycite", "gallium", "ozone", "hydrogen", "nitrogen", "cyanogen", "dagger", "mace", "fortress", "scepter", "reign", "nova", "pulsar", "quasar", "vela", "corvus", "crawler", "atrax", "spiroct", "arkyid", "toxopid", "flare", "horizon", "zenith", "antumbra", "eclipse", "mono", "poly", "mega", "quad", "oct", "risso", "minke", "bryde", "sei", "omura", "retusa", "oxynoe", "cyerce", "aegires", "navanax", "alpha", "beta", "gamma", "stell", "locus", "precept", "vanquish", "conquer", "merui", "cleroi", "anthicus", "anthicus-missile", "tecta", "collaris", "elude", "avert", "obviate", "quell", "quell-missile", "disrupt", "disrupt-missile", "renale", "latum", "evoke", "incite", "emanate", "block", "manifold", "assembly-drone", "scathe-missile", "turret-unit-build-tower", "solid", "pi", "time", "tick", "minute", "waveNumber", "waveTime", "degToRad", "radToDeg", "links", "ctrlProcessor", "ctrlPlayer", "ctrlCommand", "crux", "sharded", "derelict", "malis", "blue", "green", "unitCount", "blockCount", "liquidCount", "itemCuont", "this", "thisx", "thisy", "unit", "counter", "maph", "mapw", "air", "ipt", "totalItems", "firstItem", "totalLiquds", "totalPower", "itemCapacity", "liquidCapacity", "powerNetStored", "powerNetCapacity", "powerNetIn", "powerNetOut", "ammo", "ammoCapacity", "health", "maxHealth", "heat", "efficiency", "progress", "timescale", "rotation", "x", "y", "shootX", "shootY", "size", "dead", "range", "shooting", "boosting", "mineX", "mineY", "mine", "speed", "team", "type", "flag", "controlled", "controller", "name", "payLoadCount", "payLoadType", "enabled", "config", "color"]; 
const keyCommands = ["read", "write", "draw", "print", "drawflush", "printflush", "getlink", "control", "radar", "sensor", "set", "op", "lookup", "packcolor", "wait", "stop", "end", "jump", "ubind", "ucontrol", "uradar", "ulocate", "GetBlock", "Set Block", "Spawn Unit", "apply Status", "Spawn Wave", "Set Rule", "Flush Message", "Cutscene", "Explosion", "Set Rate", "Fetch", "Set Flag", "Get Flag", "Set Prop"];

const processCode = () => {
  const textarea = document.getElementById('myTextarea');
  const code = textarea.value.trim();
  const lines = code.split('\n');
  let formattedCode = '';
  let notFoundKeywords = [];

  for (let i = 0; i < lines.length; i++) {
    let words = lines[i].split(' ');
    let firstWord = words[0];
    let isKeyword = false;

    if (firstWord.startsWith('@')) {
      const keyword = firstWord.substring(1);
      if (keywords.includes(keyword)) {
        words[0] = '<span class="green">' + firstWord + '</span>';
        isKeyword = true;
      } else {
        words[0] = '<span class="not-found">' + firstWord + '</span>';
        notFoundKeywords.push({ keyword: firstWord, line: i + 1 });
      }
    } else if (!isNaN(firstWord)) {
      words[0] = '<span class="yellow">' + firstWord + '</span>';
    } else if (keyCommands.includes(firstWord) && !keywords.includes(firstWord)) {
      words[0] = '<span class="purple">' + firstWord + '</span>';
    } else {
      words[0] = '<span class="not-found">' + firstWord + '</span>';
      notFoundKeywords.push({ keyword: firstWord, line: i + 1 });
    }

    for (let j = 1; j < words.length; j++) {
      if (words[j].startsWith('@') && !isKeyword) {
        const keyword = words[j].substring(1);
        if (keywords.includes(keyword)) {
          words[j] = '<span class="green">' + words[j] + '</span>';
        } else {
          words[j] = '<span class="not-found">' + words[j] + '</span>';
          notFoundKeywords.push({ keyword: words[j], line: i + 1 });
        }
      } else if (!isNaN(words[j])) {
        words[j] = '<span class="yellow">' + words[j] + '</span>';
      } else {
        words[j] = '<span class="cyan">' + words[j] + '</span>';
      }
    }
    lines[i] = words.join(' ');
    
  }

  formattedCode = lines.join('<br>');

	const output = document.getElementById('output');
	output.innerHTML = formattedCode;

	const notFoundOutput = document.getElementById('notFoundOutput');
	if (notFoundKeywords.length > 0) {
			let notFoundMessage = '';
			for (let k = 0; k < notFoundKeywords.length; k++) {
					notFoundMessage += `{ ${notFoundKeywords[k].keyword} } not found; line ${notFoundKeywords[k].line}<br>`;
			}
			notFoundOutput.innerHTML = notFoundMessage;
	} else {
			notFoundOutput.innerHTML = '';
	}
};
const textarea = document.getElementById('myTextarea');
textarea.addEventListener('input', processCode);


const suggestions = document.getElementById('suggestions');
let wordList = keywords.map(word => `@${word}`);

textarea.addEventListener('mouseup', () => {
  const text = textarea.value;
  const cursorPosition = textarea.selectionStart;
  const word = getCurrentWord(text, cursorPosition);
  const matchingWords = getMatchingWords(word);

  if (word && matchingWords.length > 0) {
    const suggestionsHTML = `<strong>Maybe you mean:</strong><select >${matchingWords.map(word => `<option value="${word}">${word}</option>`).join('')}</select>`;
    suggestions.innerHTML = suggestionsHTML;
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
});

textarea.addEventListener('keypress', () => {
  const text = textarea.value;
  const cursorPosition = textarea.selectionStart;
  const word = getCurrentWord(text, cursorPosition);
  const matchingWords = getMatchingWords(word);

  if (word && matchingWords.length > 0) {
    const suggestionsHTML = `<strong>Maybe you mean:</strong><select>${matchingWords.map(word => `<option value="${word}">${word}</option>`).join('')}</select>`;
    suggestions.innerHTML = suggestionsHTML;
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
});

const getCurrentWord = (text, cursorPosition) => {
  const words = text.split(/\s+/);
  let currentWord = '';

  for (let i = 0; i < words.length; i++) {
    if (cursorPosition <= words[i].length) {
      currentWord = words[i];
      break;
    }
    cursorPosition -= words[i].length + 1;
  }
  return currentWord;
};

const getMatchingWords = (prefix) => {
  return wordList.filter(word => word.startsWith(prefix));
};

suggestions.addEventListener('change', (event) => {
  const selectedWord = event.target.value;
  const text = textarea.value;
  const cursorPosition = textarea.selectionStart;
  const currentWord = getCurrentWord(text, cursorPosition);

  const newText = text.substring(0, cursorPosition - currentWord.length) + selectedWord + text.substring(cursorPosition);
  textarea.value = newText;
  suggestions.style.display = 'none';
  processCode();
});



