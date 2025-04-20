// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-icml-paper-quot-scalable-deep-gaussian-markov-random-fields-for-general-graphs-quot-workshop-paper-on-temporal-gnns",
        
          title: "ICML Paper &quot;Scalable Deep Gaussian Markov Random Fields for General Graphs&quot; + Workshop...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/icml22/";
          
        },
      },{id: "post-master-39-s-thesis-probabilistic-regression-using-conditional-generative-adversarial-networks",
        
          title: "Master&#39;s Thesis: Probabilistic Regression using Conditional Generative Adversarial Networks",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/masters-thesis/";
          
        },
      },{id: "post-learning-communication-in-multi-agent-reinforcement-learning",
        
          title: "Learning Communication in Multi-Agent Reinforcement Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/marl-communication/";
          
        },
      },{id: "post-gridworld-sandbox-for-reinforcement-learning",
        
          title: "Gridworld Sandbox for Reinforcement Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/rl-sandbox/";
          
        },
      },{id: "post-machine-learning-for-transport-mode-classification",
        
          title: "Machine Learning for Transport Mode Classification",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/transport-mode/";
          
        },
      },{id: "post-switzerland",
        
          title: "Switzerland",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/switzerland-update/";
          
        },
      },{id: "post-automatic-online-documentation-for-github-projects-using-doxygen-travis-ci-and-github-pages",
        
          title: "Automatic online documentation for GitHub projects using Doxygen, Travis CI and GitHub pages...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/automatic-docs/";
          
        },
      },{id: "post-an-analysis-of-dependencies-to-software-packages-in-open-source-javascript-projects",
        
          title: "An analysis of dependencies to software packages in open source JavaScript projects",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/npm-dependencies/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-attended-the-nordic-probabilistic-ai-summer-school-in-helsinki-finland",
          title: 'I attended the Nordic Probabilistic AI Summer School in Helsinki, Finland',
          description: "",
          section: "News",},{id: "news-conference-paper-workshop-paper-accepted-to-icml-2022-read-more",
          title: 'Conference paper + workshop paper accepted to ICML 2022 (Read More)',
          description: "",
          section: "News",},{id: "news-i-attended-icml-2022-in-baltimore-us",
          title: 'I attended ICML 2022 in Baltimore, US',
          description: "",
          section: "News",},{id: "news-together-with-the-wasp-graduate-school-i-spent-a-week-in-helsinki-visiting-aalto-university-and-the-finnish-center-for-artifical-intelligence",
          title: 'Together with the WASP graduate school I spent a week in Helsinki, visiting...',
          description: "",
          section: "News",},{id: "news-our-paper-temporal-graph-neural-networks-for-irregular-data-has-been-accepted-to-aistats-2023-code-is-available-on-github",
          title: 'Our paper “Temporal Graph Neural Networks for Irregular Data” has been accepted to...',
          description: "",
          section: "News",},{id: "news-new-preprint-mtp-go-graph-based-probabilistic-multi-agent-trajectory-prediction-with-neural-odes",
          title: 'New preprint: “MTP-GO: Graph-Based Probabilistic Multi-Agent Trajectory Prediction with Neural ODEs”',
          description: "",
          section: "News",},{id: "news-i-presented-my-half-time-phd-seminar-on-graph-based-machine-learning-for-spatio-temporal-data-my-slides-are-shared-here",
          title: 'I presented my half-time-PhD seminar on “Graph-Based Machine Learning for Spatio-Temporal Data”. My...',
          description: "",
          section: "News",},{id: "news-together-with-great-collaborators-at-the-division-of-vehicular-systems-i-have-two-papers-on-trajectory-prediction-accepted-for-publication-mtp-go-graph-based-probabilistic-multi-agent-trajectory-prediction-with-neural-odes-accepted-to-ieee-transactions-on-intelligent-vehicles-evaluation-of-differentially-constrained-motion-models-for-graph-based-trajectory-prediction-accepted-to-ieee-intelligent-vehicles-symposium-iv-2023",
          title: 'Together with great collaborators at the Division of Vehicular Systems I have two...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-bayesian-learning-on-graphs-using-deep-gaussian-markov-random-fields-at-the-nordstat-conference-slides-are-available-here",
          title: 'I presented our work on Bayesian Learning on Graphs using Deep Gaussian Markov...',
          description: "",
          section: "News",},{id: "news-i-attended-the-very-exciting-workshop-large-scale-deep-learning-for-the-earth-system-webpage-and-presented-some-ongoing-work-in-collaboration-with-the-swedish-meteorological-and-hydrological-institute-slides-are-available-here",
          title: 'I attended the very exciting workshop Large-scale deep learning for the Earth system...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-graph-based-neural-weather-prediction-for-limited-area-modeling-now-also-accepted-to-the-tackling-climate-change-with-machine-learning-workshop-neurips-2023-code-is-available-on-github",
          title: 'New preprint on “Graph-based Neural Weather Prediction for Limited Area Modeling”. Now also...',
          description: "",
          section: "News",},{id: "news-i-had-the-pleasure-to-give-a-talk-at-the-danish-meteorological-institute-about-our-work-on-neural-weather-prediction-for-limited-area-modeling-slides-are-available-here",
          title: 'I had the pleasure to give a talk at the Danish Meteorological Institute...',
          description: "",
          section: "News",},{id: "news-i-am-visiting-the-sustainability-and-machine-learning-group-at-university-college-london-throughout-november-until-2-12",
          title: 'I am visiting the Sustainability and Machine Learning Group at University College London...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-about-neural-lam-weather-models-at-the-webinar-deep-learning-for-weather-based-power-prediction-organized-by-iea-wind-task-51-a-recording-is-available-on-youtube-and-my-slides-can-be-found-here",
          title: 'I gave a talk about Neural LAM weather models at the webinar “Deep...',
          description: "",
          section: "News",},{id: "news-i-had-the-pleasure-to-visit-the-department-of-earth-sciences-at-uppsala-university-and-give-a-talk-about-our-work-on-neural-weather-prediction",
          title: 'I had the pleasure to visit the Department of Earth Sciences at Uppsala...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-for-the-cruise-group-at-unsw-titled-graph-based-machine-learning-for-spatio-temporal-data-with-application-to-traffic-and-weather-forecasting",
          title: 'I gave a talk for the CRUISE group at UNSW titled “Graph-based Machine...',
          description: "",
          section: "News",},{id: "news-i-am-visiting-zürich-for-a-week-for-research-collaboration-i-will-also-give-two-talks-related-to-our-work-on-neural-weather-prediction-30-4-at-the-department-of-environmental-systems-science-eth-zürich-2-5-at-meteoswiss",
          title: 'I am visiting Zürich for a week for research collaboration. I will also...',
          description: "",
          section: "News",},{id: "news-i-attended-the-esa-ecmwf-workshop-machine-learning-for-earth-system-observation-and-prediction-in-frascati-italy-had-the-pleasure-to-present-our-work-on-probabilistic-weather-forecasting-slides-and-a-community-poster-about-neural-lam",
          title: 'I attended the ESA-ECMWF workshop “Machine Learning for Earth System Observation and Prediction”...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-probabilistic-weather-forecasting-with-hierarchical-graph-neural-networks-code-is-available-on-github-for-global-forecasting-and-limited-area-modeling",
          title: 'New preprint on “Probabilistic Weather Forecasting with Hierarchical Graph Neural Networks”. Code is...',
          description: "",
          section: "News",},{id: "news-workshop-paper-valid-error-bars-for-neural-weather-models-using-conformal-prediction-accepted-to-the-machine-learning-for-earth-system-modeling-workshop-at-icml-2024",
          title: 'Workshop paper “Valid Error Bars for Neural Weather Models using Conformal Prediction” accepted...',
          description: "",
          section: "News",},{id: "news-we-were-interviewed-by-svt-swedish-public-service-television-about-ai-weather-prediction-ensemble-forecasts-and-our-research-link-to-article-video-in-swedish",
          title: 'We were interviewed by SVT (Swedish public service television) about AI weather prediction,...',
          description: "",
          section: "News",},{id: "news-new-preprint-together-with-collaborators-from-ucl-and-ukaea-uncertainty-quantification-of-pre-trained-and-fine-tuned-surrogate-models-using-conformal-prediction",
          title: 'New preprint together with collaborators from UCL and UKAEA: “Uncertainty Quantification of Pre-Trained...',
          description: "",
          section: "News",},{id: "news-i-had-the-great-pleasure-to-spend-a-week-at-ecmwf-in-bonn-as-a-visiting-researcher",
          title: 'I had the great pleasure to spend a week at ECMWF in Bonn...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-probabilistic-weather-forecasting-at-the-large-scale-deep-learning-for-the-earth-system-workshop-in-bonn-slides-are-available-here",
          title: 'I presented our work on probabilistic weather forecasting at the “Large-Scale Deep Learning...',
          description: "",
          section: "News",},{id: "news-our-paper-probabilistic-weather-forecasting-with-hierarchical-graph-neural-networks-has-been-accepted-to-neurips-2024-as-a-spotlight",
          title: 'Our paper “Probabilistic Weather Forecasting with Hierarchical Graph Neural Networks” has been accepted...',
          description: "",
          section: "News",},{id: "news-new-preprint-continuous-ensemble-weather-forecasting-with-diffusion-models",
          title: 'New preprint: “Continuous Ensemble Weather Forecasting with Diffusion models”',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-in-the-rise-learning-machines-seminar-series-titled-frontiers-in-machine-learning-for-weather-forecasting-a-recording-is-available-on-youtube",
          title: 'I gave a talk in the RISE Learning Machines seminar series, titled “Frontiers...',
          description: "",
          section: "News",},{id: "news-i-attended-neurips-2024-in-vancouver-canada-had-a-blast-presenting-our-paper-on-probabilistic-weather-forecasting-and-meeting-lots-of-amazing-people",
          title: 'I attended NeurIPS 2024 in Vancouver, Canada. Had a blast presenting our paper...',
          description: "",
          section: "News",},{id: "news-i-attended-the-swedish-learning-on-graphs-and-geometry-meetup-at-uppsala-university-giving-a-talk-on-forecasting-the-weather-with-graph-neural-networks-slides",
          title: 'I attended the Swedish Learning on graphs and geometry meetup at Uppsala University,...',
          description: "",
          section: "News",},{id: "news-continuous-ensemble-weather-forecasting-with-diffusion-models-has-been-accepted-to-iclr-2025-and-diffusion-lam-probabilistic-limited-area-weather-forecasting-with-diffusion-accepted-to-the-climate-change-ai-workshop",
          title: '“Continuous Ensemble Weather Forecasting with Diffusion models” has been accepted to ICLR 2025...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/joeloskarsson", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joel-oskarsson", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YQaxGpkAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8201-0282", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://liu.se/en/employee/joeos82", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%65%6C.%6F%73%6B%61%72%73%73%6F%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
