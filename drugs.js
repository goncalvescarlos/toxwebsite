const drugs = [

  {
    category: "Alcohol",
    items: [
      {
        name: "Ethyl Glucuronide (EtG)",
        description: "Indicates alcohol use within 3–4 days."
      },
      {
        name: "Ethyl Sulfate (EtS)",
        description: "Breakdown product of alcohol; high levels suggest heavy drinking."
      }
    ]
  },

  {
    category: "Analgesic",
    items: [
      {
        name: "Acetaminophen",
        description: "Common pain reliever; overdose can cause liver failure."
      }
    ]
  },

  {
    category: "Barbiturates",
    items: [
      { name: "Butabarbital", description: "Sedative used for sleep." },
      { name: "Butalbital", description: "Used for headaches." },
      { name: "Pentobarbital", description: "Short-acting anesthetic." },
      { name: "Secobarbital", description: "Short-acting sedative." },
      { name: "Phenobarbital", description: "Long-acting anticonvulsant." }
    ]
  },

  {
    category: "Benzodiazepines",
    items: [
      { name: "Alprazolam", description: "Used for anxiety; overdose causes sedation." },
      { name: "Diazepam", description: "Used for anxiety and muscle relaxation." },
      { name: "Lorazepam", description: "Used for anxiety and withdrawal." },
      { name: "Midazolam", description: "Used for procedural sedation." },
      { name: "Clonazepam", description: "Used for seizures and anxiety." },
      { name: "Flubromazolam", description: "Very potent sedative with overdose risk." },
      { name: "Bromazolam", description: "Strong benzodiazepine with sedation risk." }
    ]
  },

  {
    category: "Opioids",
    items: [
      { name: "Fentanyl", description: "80–100× stronger than morphine." },
      { name: "Carfentanil", description: "Extremely potent; microgram doses can be fatal." },
      { name: "Morphine", description: "Pain medication; overdose causes respiratory depression." },
      { name: "Oxycodone", description: "Commonly abused opioid." },
      { name: "Hydrocodone", description: "Pain and cough suppressant." },
      { name: "Methadone", description: "Used for opioid dependence and chronic pain." },
      { name: "Tramadol", description: "Opioid-like; overdose can cause seizures." }
    ]
  },

  {
    category: "Cannabinoids",
    items: [
      { name: "THC-COOH", description: "Inactive metabolite of THC." },
      { name: "11-OH-THC", description: "Active THC metabolite." },
      { name: "Delta-8-THC", description: "Less potent THC variant." },
      { name: "Delta-10-THC", description: "Milder THC variant." },
      { name: "THCP", description: "Highly potent cannabinoid." }
    ]
  },

  {
    category: "Stimulants",
    items: [
      { name: "Cocaine", description: "Powerful stimulant; overdose affects heart." },
      { name: "Methamphetamine", description: "Highly addictive stimulant." },
      { name: "Amphetamine", description: "CNS stimulant." },
      { name: "MDMA", description: "Stimulant with hallucinogenic effects." },
      { name: "Methylphenidate", description: "Used for ADHD." }
    ]
  },

  {
    category: "Antidepressants",
    items: [
      { name: "Sertraline", description: "SSRI used for depression." },
      { name: "Fluoxetine", description: "SSRI antidepressant." },
      { name: "Citalopram", description: "SSRI with dose limits." },
      { name: "Venlafaxine", description: "SNRI; overdose risk." },
      { name: "Bupropion", description: "Used for depression and smoking cessation." }
    ]
  },

  {
    category: "Muscle Relaxants",
    items: [
      { name: "Baclofen", description: "Reduces muscle spasms." },
      { name: "Cyclobenzaprine", description: "Used for muscle pain." },
      { name: "Carisoprodol", description: "Sedative muscle relaxant." }
    ]
  },

  {
    category: "Antihistamines",
    items: [
      { name: "Diphenhydramine", description: "Used for allergies and sleep." },
      { name: "Hydroxyzine", description: "Used for anxiety and itching." }
    ]
  },

  {
    category: "Antipsychotics",
    items: [
      { name: "Aripiprazole", description: "Used for schizophrenia and bipolar disorder." },
      { name: "Quetiapine", description: "Used for mood disorders." },
      { name: "Olanzapine", description: "Used for psychosis and agitation." }
    ]
  },

  {
    category: "Other",
    items: [
      { name: "Ketamine", description: "Anesthetic with dissociative effects." },
      { name: "PCP", description: "Hallucinogen causing dissociation." },
      { name: "LSD", description: "Strong hallucinogen." },
      { name: "Psilocin", description: "Active compound in psychedelic mushrooms." }
    ]
  },

  {
    category: "Antidotes",
    items: [
      { name: "Naloxone", description: "Reverses opioid overdose." },
      { name: "Naltrexone", description: "Opioid blocker used in addiction treatment." }
    ]
  }

];
