// Wrap in IIFE
(function() {
    // Advanced Word Data focusing on nuance, collocations, and precise verbs
    const wordData = {
         // --- Group: Swift Movement ---
         "FISH": {
             emoji: "🐠", groupConcept: "Swift Movement",
             keyUsageExample: "The small fish <strong>darted</strong> away from the predator.", // Precise verb
             alternativeExamples: ["The fish moved quickly through the water.", "The fish swam fast to escape.", "The fish proceeded rapidly underwater."]
         },
         "HORSE": {
             emoji: "🐴", groupConcept: "Swift Movement",
             keyUsageExample: "The racehorse <strong>galloped</strong> across the finish line.", // Specific gait
             alternativeExamples: ["The horse ran at high speed.", "The horse moved quickly on the track.", "The horse sprinted towards the end."]
         },
         "DEER": {
             emoji: "🦌", groupConcept: "Swift Movement",
             keyUsageExample: "The startled deer <strong>bounded</strong> gracefully into the woods.", // Evokes jumping motion
             alternativeExamples: ["The deer ran away quickly.", "The deer jumped swiftly over the log.", "The deer moved rapidly into the trees."]
         },
         "RABBIT": {
             emoji: "🐰", groupConcept: "Swift Movement",
             keyUsageExample: "The rabbit <strong>scurried</strong> into its burrow when it sensed danger.", // Quick, short steps
             alternativeExamples: ["The rabbit hopped away fast.", "The rabbit ran quickly underground.", "The rabbit moved rapidly to safety."]
         },
          "MOUSE": {
             emoji: "🐭", groupConcept: "Swift Movement",
             keyUsageExample: "The mouse <strong>scampered</strong> across the kitchen floor.", // Similar to scurry, light/quick
             alternativeExamples: ["The mouse ran quickly over the floor.", "The mouse moved fast along the ground.", "The tiny mouse traversed the area."]
         },
          "SNAKE": {
             emoji: "🐍", groupConcept: "Swift Movement", // Can also be stealth
             keyUsageExample: "The snake <strong>slithered</strong> silently through the tall grass.", // Specific verb for snakes
             alternativeExamples: ["The snake moved quietly in the grass.", "The snake crawled smoothly along.", "The reptile proceeded without noise."]
         },

         // --- Group: Vocalization ---
         "DOG": {
             emoji: "🐶", groupConcept: "Vocalization",
             keyUsageExample: "The guard dog <strong>barked</strong> fiercely at the intruder.", // Standard verb
             alternativeExamples: ["The dog made loud noises at the person.", "The dog shouted aggressively.", "The canine vocalized loudly."]
         },
         "CAT": {
             emoji: "🐱", groupConcept: "Vocalization",
             keyUsageExample: "The contented cat <strong>purred</strong> loudly while being petted.", // Specific sound
             alternativeExamples: ["The cat made a soft vibrating noise.", "The happy cat sounded pleased.", "The feline expressed contentment audibly."]
         },
         "LION": {
             emoji: "🦁", groupConcept: "Vocalization",
             keyUsageExample: "The lion's mighty <strong>roar</strong> echoed across the savanna.", // Key noun/verb
             alternativeExamples: ["The lion made a very loud sound.", "The big cat shouted powerfully.", "The predator vocalized with great volume."]
         },
          "WOLF": {
             emoji: "🐺", groupConcept: "Vocalization",
             keyUsageExample: "The lone wolf <strong>howled</strong> mournfully at the full moon.", // Specific sound
             alternativeExamples: ["The wolf made a long, sad sound.", "The wild canine cried out to the moon.", "The animal vocalized with a wailing tone."]
         },
          "OWL": {
             emoji: "🦉", groupConcept: "Vocalization",
             keyUsageExample: "The owl <strong>hooted</strong> softly from the treetop in the darkness.", // Specific sound
             alternativeExamples: ["The night bird made its typical sound.", "The owl called out quietly.", "The nocturnal bird vocalized from the tree."]
         },
         "BEE": {
              emoji: "🐝", groupConcept: "Vocalization", // Or Sound Production
              keyUsageExample: "The bees <strong>buzzed</strong> actively around the hive.", // Specific sound
              alternativeExamples: ["The insects made a low humming sound.", "The swarm sounded busy.", "The bees created noise near their home."]
          },

         // --- Group: Predation & Stealth ---
         "TIGER": {
             emoji: "🐅", groupConcept: "Predation & Stealth",
             keyUsageExample: "The tiger <strong>prowled</strong> stealthily through the undergrowth, stalking its prey.", // Prowl implies stealthy hunting
             alternativeExamples: ["The tiger walked quietly looking for food.", "The large cat moved sneakily in the jungle.", "The predator advanced hidden in the foliage."]
         },
          "FOX": {
             emoji: "🦊", groupConcept: "Predation & Stealth",
             keyUsageExample: "The cunning fox <strong>crept</strong> towards the henhouse under the cover of darkness.", // Crept implies stealth
             alternativeExamples: ["The fox moved quietly near the chickens.", "The sly animal approached silently.", "The predator advanced carefully towards its target."]
         },
          "SPIDER": {
             emoji: "🕷️", groupConcept: "Predation & Stealth",
             keyUsageExample: "The spider patiently waited, perfectly still, to <strong>ambush</strong> unsuspecting insects.", // Ambush implies surprise attack
             alternativeExamples: ["The spider waited to catch bugs.", "The arachnid stayed hidden to trap prey.", "The creature remained motionless before attacking."]
          },


         // --- Group: Unique Adaptations ---
         "ELEPHANT": {
             emoji: "🐘", groupConcept: "Unique Adaptations",
             keyUsageExample: "The elephant skillfully <strong>manipulated</strong> objects using its prehensile trunk.", // Precise verb for trunk use
             alternativeExamples: ["The elephant used its long nose to grab things.", "The elephant picked up items with its trunk.", "The large mammal handled objects with its facial appendage."]
         },
         "GIRAFFE": {
             emoji: "🦒", groupConcept: "Unique Adaptations",
             keyUsageExample: "The giraffe's elongated neck allows it to <strong>browse</strong> on high foliage inaccessible to others.", // Browse = eat leaves/twigs
             alternativeExamples: ["The giraffe uses its long neck to eat high leaves.", "The tall animal reaches high branches for food.", "The giraffe feeds on vegetation others cannot get."]
         },
         "CAMEL": { // Adding Camel for adaptation
              emoji: "🐪", groupConcept: "Unique Adaptations",
              keyUsageExample: "The camel is perfectly <strong>adapted</strong> to survive in arid desert environments.", // Key concept verb
              alternativeExamples: ["The camel lives well in the dry desert.", "The camel can handle hot, sandy places.", "The animal is suited for water-scarce regions."]
          },
          "PENGUIN": {
             emoji: "🐧", groupConcept: "Unique Adaptations",
             keyUsageExample: "Penguins possess dense, waterproof feathers providing <strong>insulation</strong> against the frigid Antarctic waters.", // Focus on feature's function (noun here, but key)
             alternativeExamples: ["Penguins have special feathers for the cold.", "The bird's feathers keep it warm in icy water.", "Penguins are protected from the cold by their plumage."]
          },
          "TURTLE": {
             emoji: "🐢", groupConcept: "Unique Adaptations",
             keyUsageExample: "The turtle can <strong>retract</strong> its head and limbs into its protective carapace.", // Retract = pull back into
             alternativeExamples: ["The turtle hides inside its hard shell.", "The reptile pulls its body parts into its shell.", "The turtle goes into its shell for safety."]
          },

         // --- Group: Social Behavior ---
          "MONKEY": {
             emoji: "🐵", groupConcept: "Social Behavior",
             keyUsageExample: "Monkeys often engage in social <strong>grooming</strong> to strengthen troop bonds.", // Specific social action
             alternativeExamples: ["Monkeys clean each other's fur.", "The primates interact by picking through hair.", "Members of the group maintain hygiene together."]
          },
           "BEE": { // Also fits here
               emoji: "🐝", groupConcept: "Social Behavior",
               keyUsageExample: "Bees exhibit complex social structures, <strong>cooperating</strong> within the hive for survival.", // Cooperating is key
               alternativeExamples: ["Bees work together in their home.", "The insects live in an organized group.", "The hive functions through collective effort."]
           },
           "WOLF": { // Also fits here
               emoji: "🐺", groupConcept: "Social Behavior",
               keyUsageExample: "Wolves hunt <strong>cooperatively</strong> in packs to bring down large prey.", // Cooperative hunting
               alternativeExamples: ["Wolves hunt together in groups.", "The pack works as a team to get food.", "Group hunting is typical for wolves."]
           },
            "DOLPHIN": { // Also fits here
               emoji: "🐬", groupConcept: "Social Behavior",
               keyUsageExample: "Dolphins communicate and socialize within pods using a complex range of clicks and whistles.", // Social communication
               alternativeExamples: ["Dolphins talk to each other in groups.", "The sea mammals interact within their pods.", "Group communication is important for dolphins."]
           }
           // Note: Simplified the list slightly from 35 to make data more manageable and focused
           // Add more animals following the advanced pattern if needed.
    };


    // --- DOM Elements ---
    const gallery = document.getElementById('animalGallery');
    const activeGameArea = document.getElementById('activeGameArea');
    const animalImageActive = document.getElementById('animalImageActive');
    const wordDisplayActive = document.getElementById('wordDisplayActive');
    const optionsContainer = document.getElementById('options');
    const feedbackArea = document.getElementById('feedbackArea');
    const resetButton = document.getElementById('resetButton');

    // --- Game State ---
    let currentKeySentence = '';
    let currentWordKey = '';

    // --- Initialization ---
    function initializeGallery() {
        gallery.innerHTML = ''; // Clear previous items

        // 1. Group animals by groupConcept
        const groupedAnimals = {};
        for (const key in wordData) {
            const animal = wordData[key];
            // Use a default group if groupConcept is missing for some reason
            const group = animal.groupConcept || "Miscellaneous";
            if (!groupedAnimals[group]) {
                groupedAnimals[group] = [];
            }
            groupedAnimals[group].push(key);
        }

        // 2. Define group order (optional, but makes sense)
        const groupOrder = ["Swift Movement", "Vocalization", "Predation & Stealth", "Unique Adaptations", "Social Behavior", "Miscellaneous"];

        // 3. Render groups in defined order
         groupOrder.forEach(groupName => {
            // Skip rendering if group is empty or doesn't exist in data
            if (!groupedAnimals[groupName] || groupedAnimals[groupName].length === 0) return;

            // Create header for the group
            const groupHeader = document.createElement('h2');
            groupHeader.className = 'gallery-group-header';
            // Format header text nicely (e.g., replace '&' with '/')
            groupHeader.textContent = groupName.replace(/ & /g, ' / ');
            gallery.appendChild(groupHeader);

            // Create container for animals in this group
            const groupContent = document.createElement('div');
            groupContent.className = 'gallery-group-content';
            gallery.appendChild(groupContent);

            // Sort animals within the group alphabetically by key
            groupedAnimals[groupName].sort();

            // Add animals to the group container
            groupedAnimals[groupName].forEach(key => {
                const animal = wordData[key];
                const selectorDiv = document.createElement('div');
                selectorDiv.className = 'animal-selector';
                selectorDiv.dataset.animalKey = key; // Store key for identification

                const emojiSpan = document.createElement('span');
                emojiSpan.className = 'emoji';
                emojiSpan.textContent = animal.emoji;

                const nameSpan = document.createElement('span');
                nameSpan.className = 'name';
                // Display name in Title Case
                nameSpan.textContent = key.charAt(0) + key.slice(1).toLowerCase();

                selectorDiv.appendChild(emojiSpan);
                selectorDiv.appendChild(nameSpan);

                selectorDiv.addEventListener('click', handleAnimalSelection);
                groupContent.appendChild(selectorDiv); // Append to group container
            });
        });
    }

    // --- Event Handlers ---
    function handleAnimalSelection(event) {
        const clickedSelector = event.currentTarget;
        // Double check it's not completed (defense against potential race conditions)
        if (clickedSelector.classList.contains('completed')) return;

        currentWordKey = clickedSelector.dataset.animalKey;
        const data = wordData[currentWordKey];
        if (!data) {
            console.error("Data not found for key:", currentWordKey); // Debugging
            return;
        }

        clearActiveGameArea(); // Clear previous game state first

        animalImageActive.textContent = data.emoji;
        wordDisplayActive.textContent = currentWordKey.charAt(0) + currentWordKey.slice(1).toLowerCase();
        currentKeySentence = data.keyUsageExample; // Store the target sentence

        // Ensure alternativeExamples exists and is an array
        const alternatives = Array.isArray(data.alternativeExamples) ? data.alternativeExamples : [];
        let allOptions = [data.keyUsageExample, ...alternatives];
        allOptions = shuffleArray(allOptions);
        displayOptions(allOptions); // Display the options

        // Set initial feedback for the active game
        showFeedback(`For the ${wordDisplayActive.textContent}, choose the sentence demonstrating the most precise or idiomatic usage:`, "info-feedback");
        activeGameArea.classList.add('visible'); // Show the game area

         // Scroll the active game area into view smoothly
         activeGameArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function handleReset() {
        clearActiveGameArea(); // Clear the game play area
        activeGameArea.classList.remove('visible'); // Hide the game play area

        // Reset all gallery items
        gallery.querySelectorAll('.animal-selector.completed').forEach(selector => {
            selector.classList.remove('completed');
            selector.style.pointerEvents = 'auto'; // Re-enable clicking
        });

        // Set initial feedback message again
        showFeedback("Select an animal from the gallery to test your vocabulary and usage knowledge.", "info-feedback");

         // Scroll to the top of the gallery
         gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Core Logic Functions ---
    function displayOptions(options) {
        optionsContainer.innerHTML = ""; // Clear previous options
        options.forEach(optionHTML => {
            const button = document.createElement("button");
            button.innerHTML = optionHTML; // Use innerHTML to render <strong> tags
            button.onclick = function() {
                // Pass the innerHTML for comparison, as it matches stored keySentence
                checkAnswer(button.innerHTML, button);
            };
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedSentenceHTML, clickedButton) {
        // Disable all option buttons after a choice is made
        optionsContainer.querySelectorAll("button").forEach(btn => {
            btn.disabled = true;
        });

        // Find the button that represents the key description using innerHTML comparison
         let bestAnswerButton = null;
         optionsContainer.querySelectorAll("button").forEach(btn => {
             if (btn.innerHTML === currentKeySentence) {
                 bestAnswerButton = btn;
             }
         });

        // Always highlight the best answer button if found
        if (bestAnswerButton) {
            bestAnswerButton.classList.add("correct");
            bestAnswerButton.style.border = "3px solid #388e3c"; // Keep emphasis
        } else {
            console.error("Best answer button not found for:", currentKeySentence); // Debugging
        }

        // Mark the corresponding gallery item as completed
        const galleryItem = gallery.querySelector(`.animal-selector[data-animal-key="${currentWordKey}"]`);
        if (galleryItem) {
            galleryItem.classList.add('completed');
            galleryItem.style.pointerEvents = 'none'; // Explicitly disable clicks
        } else {
             console.error("Gallery item not found for key:", currentWordKey); // Debugging
        }

        // Provide more explanatory feedback for advanced learners
        if (clickedButton === bestAnswerButton) {
            // Extract the key term for explanation (remove strong tags for feedback)
             // Use textContent of the button for cleaner feedback text
            const keyTerm = bestAnswerButton ? (bestAnswerButton.querySelector('strong') ? bestAnswerButton.querySelector('strong').textContent : '[key term]') : '[key term]';
            showFeedback(`Correct! Using "<strong>${keyTerm}</strong>" here is precise and idiomatic. Well done! Select another animal.`, "correct-feedback");
        } else {
             // Explain why the chosen one is less ideal compared to the best one
             const bestTerm = bestAnswerButton ? (bestAnswerButton.querySelector('strong') ? bestAnswerButton.querySelector('strong').textContent : '[best term]') : '[best term]';
             showFeedback(`While factually plausible, that phrasing isn't as precise or common as the highlighted option using "<strong>${bestTerm}</strong>". Select another animal.`, "info-feedback");
            clickedButton.classList.remove('correct');
            clickedButton.classList.add('faded'); // Fade the less-optimal choice
        }

         // Fade out the *other* non-best, non-clicked buttons
         optionsContainer.querySelectorAll("button").forEach(btn => {
             if (btn !== bestAnswerButton && btn !== clickedButton) {
                 btn.classList.add('faded');
                 btn.classList.remove('correct'); // Ensure not marked correct
             }
         });
    }


    // --- Helper Functions ---
    function showFeedback(message, className) {
        feedbackArea.innerHTML = message; // Use innerHTML as feedback might contain tags
        feedbackArea.className = `feedback ${className}`;
    }

    function clearOptions() {
        optionsContainer.innerHTML = "";
    }

    function clearActiveGameArea() {
        animalImageActive.textContent = '';
        wordDisplayActive.textContent = '';
        clearOptions();
        feedbackArea.innerHTML = ''; // Use innerHTML
        feedbackArea.className = 'feedback'; // Reset feedback class
         // Reset button styles within the active area if needed
         optionsContainer.querySelectorAll("button").forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('correct', 'faded');
            btn.style.border = 'none';
            btn.style.opacity = '1';
         });
    }


    function shuffleArray(array) {
        // Standard Fisher-Yates shuffle
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // --- Start ---
    function runGame() {
        // Ensure necessary elements exist before proceeding
        if (!gallery || !activeGameArea || !resetButton) {
             console.error("Essential game elements not found in the DOM!");
             return;
         }
        initializeGallery(); // Create the animal selection grid
        resetButton.addEventListener('click', handleReset); // Add reset functionality
         // Set initial feedback message
         showFeedback("Select an animal from the gallery to test your vocabulary and usage knowledge.", "info-feedback");
    }

    // Wait for DOM to be ready before running the game setup
    if (document.readyState === 'loading') { // Loading hasn't finished yet
        document.addEventListener('DOMContentLoaded', runGame);
    } else { // `DOMContentLoaded` has already fired
        runGame();
    }

})(); // End IIFE
