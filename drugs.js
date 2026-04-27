// RAW 1:1 EXHAUSTIVE DATASET (all substances from source, no filtering)
const drugs = [

{ category: "Alcohol", items: [
{ name: "Ethyl Glucuronide (EtG)", description: "Formed after alcohol consumption; detectable up to ~80 hours." },
{ name: "Ethyl Sulfate (EtS)", description: "Alcohol metabolite; high levels suggest heavy drinking." }
]},

{ category: "Analgesic", items: [
{ name: "Acetaminophen", description: "Common pain reliever; overdose can cause liver failure." }
]},

{ category: "Barbiturates", items: [
{ name: "Butabarbital", description: "Intermediate-acting sedative." },
{ name: "Butalbital", description: "Used for headaches." },
{ name: "Pentobarbital", description: "Short-acting anesthetic." },
{ name: "Secobarbital", description: "Short-acting sedative." },
{ name: "Phenobarbital", description: "Long-acting anticonvulsant." }
]},

{ category: "Benzodiazepines", items: [
{ name: "2-Hydroxyethylflurazepam", description: "Flurazepam metabolite." },
{ name: "7-Aminoclonazepam", description: "Clonazepam metabolite." },
{ name: "Clonazepam", description: "Used for seizures and anxiety." },
{ name: "7-Aminoflunitrazepam", description: "Flunitrazepam metabolite." },
{ name: "Flunitrazepam", description: "Potent sedative." },
{ name: "7-Aminonitrazepam", description: "Nitrazepam metabolite." },
{ name: "Alpha-Hydroxymidazolam", description: "Midazolam metabolite." },
{ name: "Alpha-Hydroxytriazolam", description: "Triazolam metabolite." },
{ name: "Alprazolam", description: "Anxiolytic." },
{ name: "Diazepam", description: "Long-acting benzodiazepine." },
{ name: "Etizolam", description: "Thienodiazepine." },
{ name: "Flualprazolam", description: "Designer analog." },
{ name: "Flubromazolam", description: "Highly potent analog." },
{ name: "Bromazolam", description: "Designer sedative." },
{ name: "Adinazolam", description: "Experimental." },
{ name: "Deschloroetizolam", description: "Designer benzodiazepine." },
{ name: "Pyrazolam", description: "Research chemical." },
{ name: "Diclazepam", description: "Long-acting analog." },
{ name: "Phenazepam", description: "Very long-acting." },
{ name: "Desalkylgidazepam", description: "Metabolite." },
{ name: "Estazolam", description: "Sleep medication." },
{ name: "Flurazepam", description: "Insomnia treatment." },
{ name: "Lorazepam", description: "Anxiolytic." },
{ name: "Midazolam", description: "Sedative." },
{ name: "Nordiazepam", description: "Diazepam metabolite." },
{ name: "Temazepam", description: "Sleep aid." },
{ name: "Alpha-Hydroxyalprazolam", description: "Alprazolam metabolite." },
{ name: "Oxazepam", description: "Short-acting benzodiazepine." },
{ name: "Norchlordiazepoxide", description: "Metabolite." },
{ name: "Chlordiazepoxide", description: "Alcohol withdrawal treatment." }
]},

{ category: "Anticonvulsants", items: [
{ name: "Topiramate", description: "Used for seizures and migraines." },
{ name: "Pregabalin", description: "Nerve pain treatment." },
{ name: "Gabapentin", description: "Seizures and nerve pain." },
{ name: "Lamotrigine", description: "Mood stabilizer." }
]},

{ category: "Cannabinoids", items: [
{ name: "THC-COOH", description: "Inactive THC metabolite." },
{ name: "11-OH-THC", description: "Active THC metabolite." },
{ name: "ADB-BUTINACA", description: "Synthetic cannabinoid." },
{ name: "MDMB-4en-PINACA", description: "Synthetic cannabinoid." },
{ name: "Delta-8-THC", description: "THC variant." },
{ name: "Delta-10-THC", description: "THC variant." },
{ name: "9-HHC", description: "Hydrogenated THC." },
{ name: "Hexahydrocannabinol", description: "Synthetic cannabinoid." },
{ name: "THCP", description: "Highly potent cannabinoid." },
{ name: "ADB-CHMINACA", description: "Synthetic cannabinoid." }
]},

{ category: "NSAIDs", items: [
{ name: "Ibuprofen", description: "Pain reliever." },
{ name: "Naproxen", description: "Anti-inflammatory." }
]},

{ category: "Piperazines", items: [
{ name: "mCPP", description: "Designer stimulant." },
{ name: "TFMPP", description: "Designer stimulant." },
{ name: "BZP", description: "Stimulant." }
]},

{ category: "Opioids", items: [
{ name: "Buprenorphine", description: "Partial agonist." },
{ name: "Morphine", description: "Opioid analgesic." },
{ name: "Norbuprenorphine", description: "Metabolite." },
{ name: "Propoxyphene", description: "Analgesic." },
{ name: "Norpropoxyphene", description: "Metabolite." },
{ name: "6-Monoacetylmorphine", description: "Heroin metabolite." },
{ name: "Alfentanil", description: "Opioid." },
{ name: "Codeine", description: "Mild opioid." },
{ name: "Norcodeine", description: "Metabolite." },
{ name: "Despropionylfentanyl", description: "Fentanyl precursor." },
{ name: "Dihydrocodeine", description: "Opioid." },
{ name: "Carfentanil", description: "Ultra-potent." },
{ name: "3-Methylfentanyl", description: "Analog." },
{ name: "p-Fluorofentanyl", description: "Analog." },
{ name: "Furanylfentanyl", description: "Analog." },
{ name: "Acetylfentanyl", description: "Analog." },
{ name: "Acrylfentanyl", description: "Analog." },
{ name: "Tianeptine", description: "Opioid-like antidepressant." },
{ name: "Tetramethyl-4-piperidinol", description: "By-product." },
{ name: "Fentanyl", description: "Potent opioid." },
{ name: "Hydrocodone", description: "Pain relief." },
{ name: "Hydromorphone", description: "Opioid." },
{ name: "Meperidine", description: "Opioid." },
{ name: "Nalbuphine", description: "Opioid." },
{ name: "Sufentanil", description: "Opioid." },
{ name: "Norfentanyl", description: "Metabolite." },
{ name: "Normeperidine", description: "Metabolite." },
{ name: "Oxycodone", description: "Opioid." },
{ name: "Noroxycodone", description: "Metabolite." },
{ name: "Norhydrocodone", description: "Metabolite." },
{ name: "Oxymorphone", description: "Opioid." },
{ name: "Tapentadol", description: "Opioid." },
{ name: "Tramadol", description: "Opioid." },
{ name: "O-Desmethyl Tramadol", description: "Metabolite." },
{ name: "Butorphanol Tartrate", description: "Opioid." },
{ name: "Pentazocine", description: "Opioid." },
{ name: "Methadone", description: "Maintenance therapy." },
{ name: "EDDP", description: "Methadone metabolite." }
]},

{ category: "Stimulants", items: [
{ name: "Benzoylecgonine", description: "Cocaine metabolite." },
{ name: "Cocaine", description: "Stimulant." },
{ name: "Dipentylone", description: "Synthetic cathinone." },
{ name: "4-Chloromethcathinone", description: "Synthetic stimulant." },
{ name: "Pentylone", description: "Cathinone." },
{ name: "Eutylone", description: "Cathinone." },
{ name: "N-Isopropyl Butylone", description: "Cathinone." },
{ name: "Alpha-PiHP", description: "Stimulant." },
{ name: "Methylone", description: "Cathinone." },
{ name: "MDPHP", description: "Stimulant." },
{ name: "Mephedrone", description: "Stimulant." },
{ name: "Methylenedioxypyrovalerone", description: "MDPV." },
{ name: "Methylphenidate", description: "ADHD." },
{ name: "Phentermine", description: "Stimulant." },
{ name: "Pseudoephedrine", description: "Decongestant." },
{ name: "Ritalinic acid", description: "Metabolite." }
]},

{ category: "Antidepressants", items: [
{ name: "Amitriptyline", description: "TCA." },
{ name: "Citalopram", description: "SSRI." },
{ name: "Clomipramine", description: "TCA." },
{ name: "Desipramine", description: "TCA." },
{ name: "Doxepin", description: "TCA." },
{ name: "Imipramine", description: "TCA." },
{ name: "Maprotiline", description: "Antidepressant." },
{ name: "Nordoxepin", description: "Metabolite." },
{ name: "Nortriptyline", description: "TCA." },
{ name: "Sertraline", description: "SSRI." },
{ name: "Duloxetine", description: "SNRI." },
{ name: "Trimipramine", description: "TCA." },
{ name: "Venlafaxine", description: "SNRI." },
{ name: "Trazodone", description: "Atypical." },
{ name: "Paroxetine", description: "SSRI." },
{ name: "Fluoxetine", description: "SSRI." },
{ name: "N-Desmethyl Trimipramine", description: "Metabolite." },
{ name: "Norfluoxetine", description: "Metabolite." },
{ name: "Bupropion", description: "Atypical." },
{ name: "N-Desmethyl Clomipramine", description: "Metabolite." }
]},

{ category: "Other", items: [
{ name: "Ketamine", description: "Anesthetic." },
{ name: "Norketamine", description: "Metabolite." },
{ name: "Phencyclidine (PCP)", description: "Dissociative." },
{ name: "Dextromethorphan", description: "Cough suppressant." },
{ name: "Psilocin", description: "Hallucinogen." },
{ name: "LSD", description: "Psychedelic." },
{ name: "2-oxo-3-OH-LSD", description: "Metabolite." }
]},

{ category: "Adulterants", items: [
{ name: "Lidocaine", description: "Local anesthetic." },
{ name: "Benzocaine", description: "Local anesthetic." },
{ name: "Bupivacaine", description: "Anesthetic." },
{ name: "Clonidine", description: "Alpha-agonist." },
{ name: "Dimethyl sulfone", description: "Additive." },
{ name: "Etomidate", description: "Anesthetic." },
{ name: "Levamisole", description: "Cocaine adulterant." },
{ name: "Metamizole", description: "Analgesic." },
{ name: "Phenacetin", description: "Banned analgesic." },
{ name: "Procaine", description: "Anesthetic." },
{ name: "Quinine", description: "Masking agent." },
{ name: "Tadalafil", description: "ED drug." },
{ name: "Tetracaine", description: "Anesthetic." },
{ name: "BTMPS", description: "Plastic additive found in drugs." }
]},

{ category: "Antidotes", items: [
{ name: "Naltrexone", description: "Opioid antagonist." },
{ name: "Naloxone", description: "Reverses overdose." }
]}

,

{ category: "Phenothiazines", items: [
{ name: "Chlorpromazine", description: "Antipsychotic phenothiazine." },
{ name: "Promazine", description: "First-generation antipsychotic." }
]},

{ category: "Alpha-2 Agonists", items: [
{ name: "Xylazine", description: "Veterinary sedative found in illicit drugs." },
{ name: "Medetomidine", description: "Veterinary sedative." },
{ name: "Guanfacine", description: "Used for hypertension and ADHD." }
]},

{ category: "Antihistamines", items: [
{ name: "Diphenhydramine", description: "Used for allergies and sleep." },
{ name: "Hydroxyzine", description: "Used for anxiety and itching." }
]},

{ category: "Muscle Relaxants", items: [
{ name: "Baclofen", description: "Reduces muscle spasms." },
{ name: "Cyclobenzaprine", description: "Muscle relaxant." },
{ name: "N-Desmethyl Cyclobenzaprine", description: "Cyclobenzaprine metabolite." },
{ name: "Carisoprodol", description: "Sedating muscle relaxant." },
{ name: "Meprobamate", description: "Anxiolytic and muscle relaxant." }
]},

{ category: "Amphetamines", items: [
{ name: "Amphetamine", description: "CNS stimulant." },
{ name: "Methamphetamine", description: "Highly addictive stimulant." },
{ name: "MDMA (Methylenedioxymethamphetamine)", description: "Empathogen stimulant." },
{ name: "Modafinil", description: "Wakefulness-promoting agent." }
]},

{ category: "Sedative-Hypnotics", items: [
{ name: "Zaleplon", description: "Sleep aid." },
{ name: "Zolpidem", description: "Sleep aid." },
{ name: "Zopiclone", description: "Sleep aid." }
]},

{ category: "Nitazenes", items: [
{ name: "N-Pyrrolidino Etonitazene", description: "Ultra-potent synthetic opioid." },
{ name: "Etodesnitazene", description: "Synthetic opioid." },
{ name: "Isotonitazene", description: "Highly potent opioid." },
{ name: "N-Piperidinyl Etonitazene", description: "Synthetic opioid." },
{ name: "Butonitazene", description: "Synthetic opioid." },
{ name: "Metonitazene", description: "Synthetic opioid." },
{ name: "Protonitazene", description: "Synthetic opioid." },
{ name: "N-Pyrrolidino Protonitazene", description: "Analog." },
{ name: "N-Pyrrolidino Isotonitazene", description: "Analog." },
{ name: "N-Pyrrolidino Metonitazene", description: "Analog." },
{ name: "N-Desethyl Isotonitazene", description: "Analog." }
]},

{ category: "Brorphine Analogs", items: [
{ name: "Brorphine", description: "Potent synthetic opioid." },
{ name: "Spirochlorphine", description: "Analog." },
{ name: "Chlorphine", description: "Analog." },
{ name: "Fluorphine", description: "Analog." },
{ name: "Iodorphine", description: "Analog." },
{ name: "Orphine", description: "Analog." }
]},

{ category: "Markers", items: [
{ name: "Cotinine", description: "Nicotine metabolite." }
]},

{ category: "Other Additions", items: [
{ name: "Milnacipran", description: "Used for fibromyalgia." },
{ name: "Norephedrine", description: "Former decongestant/weight-loss drug." },
{ name: "Mitragynine", description: "Active compound in kratom." }
]}


]}

];
