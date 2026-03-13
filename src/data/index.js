export const projects = [
  {
    id: 1,
    title: "Speech Emotion Recognition",
    subtitle: "Reconnaissance des Émotions Vocales",
    description: "Architecture CNN-BiLSTM pour la reconnaissance d'émotions à partir de signaux audio. Pipeline complet incluant l'extraction de features MFCC, l'entraînement d'un réseau hybride convolutif et bidrectionnel, avec déploiement via Flask.",
    tech: ["TensorFlow", "Keras", "Librosa", "Flask", "Python"],
    metric: "F1-Score",
    metricValue: "91%",
    metricColor: "electric",
    category: "Deep Learning · NLP Audio",
    icon: "🎙️",
    github: "https://github.com/ilyass-pp/speech-emotion-recognition",
  },
  {
    id: 2,
    title: "Chest X-ray Detection",
    subtitle: "Détection de Pneumonies — IA Médicale",
    description: "Détection automatique de pneumonies sur radiographies thoraciques avec EfficientNet-B0 et Autoencoder. Utilisation du transfer learning pour maximiser la performance sur un dataset médical déséquilibré.",
    tech: ["PyTorch", "EfficientNet-B0", "Autoencoder", "Python"],
    metric: "Transfer Learning",
    metricValue: "IA Médicale",
    metricColor: "sage",
    category: "Computer Vision · Healthcare AI",
    icon: "🫁",
    github: "https://github.com/ilyass-pp/chest-xray-pneumonia-detection",
  },
  {
    id: 3,
    title: "Credit Risk Prediction",
    subtitle: "Prédiction du Défaut de Paiement",
    description: "Pipeline ML bout-en-bout pour la prédiction du risque crédit. Traitement du déséquilibre de classes avec SMOTE, optimisation de seuil de décision, et validation croisée rigoureuse avec XGBoost.",
    tech: ["Python", "scikit-learn", "XGBoost", "SMOTE", "Pandas"],
    metric: "Pipeline",
    metricValue: "End-to-End",
    metricColor: "ember",
    category: "Machine Learning · FinTech",
    icon: "📊",
    github: "https://github.com/ilyass-pp/credit-risk-ml",
  },
  {
    id: 4,
    title: "Landslide Detection",
    subtitle: "Détection de Glissements de Terrain",
    description: "Détection de glissements de terrain via deep learning appliqué à la télédétection. Classification d'images satellites avec un pipeline de traitement géospatial robuste.",
    tech: ["Deep Learning", "Python", "Remote Sensing", "Computer Vision"],
    metric: "F1-Score",
    metricValue: "0.9064",
    metricColor: "electric",
    category: "Computer Vision · Géospatial",
    icon: "🛰️",
    github: "https://github.com/ilyass-pp/landslide-detection",
  },
];

export const skillGroups = [
  {
    label: "Langages",
    icon: "⌨️",
    skills: ["Python", "C", "C++"],
  },
  {
    label: "Machine Learning",
    icon: "🧠",
    skills: ["scikit-learn", "XGBoost", "SMOTE", "Feature Engineering"],
  },
  {
    label: "Deep Learning",
    icon: "🔬",
    skills: ["TensorFlow", "Keras", "PyTorch", "Transfer Learning"],
  },
  {
    label: "Computer Vision",
    icon: "👁️",
    skills: ["CNN", "EfficientNet", "Autoencoder", "OpenCV"],
  },
  {
    label: "NLP & Audio AI",
    icon: "🎙️",
    skills: ["NLP", "BiLSTM", "Librosa", "MFCC", "Audio Processing"],
  },
  {
    label: "Big Data",
    icon: "🗄️",
    skills: ["Hadoop", "HDFS", "Hive", "Apache Spark"],
  },
  {
    label: "Bases de données",
    icon: "💾",
    skills: ["SQL", "MongoDB", "Neo4j"],
  },
  {
    label: "Outils & Dev",
    icon: "🛠️",
    skills: ["Linux", "Git", "Flask", "Jupyter", "HTML/CSS"],
  },
];

export const values = [
  {
    icon: "🎯",
    title: "Esprit analytique",
    desc: "Approche rigoureuse des données, des modèles et des résultats. Chaque décision est fondée sur des métriques concrètes.",
  },
  {
    icon: "⚙️",
    title: "Rigueur technique",
    desc: "Code propre, pipelines structurés, expériences reproductibles. La qualité technique est non négociable.",
  },
  {
    icon: "🚀",
    title: "Projets concrets",
    desc: "Projets menés de bout en bout, du preprocessing au déploiement. L'IA doit produire de la valeur réelle.",
  },
  {
    icon: "🌐",
    title: "Innovation continue",
    desc: "Veille constante sur les dernières avancées en IA, ML et Data Science pour rester à la pointe.",
  },
];
