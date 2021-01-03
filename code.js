
// KEYS
var keyEducation = 'Education';

// primary education
var keyPrimary = 'Primary';
var keyScienceAndTechnology = 'Science and Technology';
var keyPhysicalEducation = 'Physical Education';
var keySpecialNeeds = 'Special Needs';
var keyPublicFunding = 'Public Funding';
var keyPublicVsPrivate = 'Public vs Private';


// higher level education
var keyHigherLevel = 'Higher Level';
var keyStudentLoanDebt = 'Student Loan Debt';
var keyUnequalAdmissions = 'Unequal Opportunity';
var keyHighRankingUniversities = 'High Ranking Universities';


// international comparison
var keyInternational = 'International';
var keyQualitativeDifferences = 'Qualitative Differences';
var keyUSRank = 'US Rankings';
var keyUSRankMath = 'US Rank Math';
var keyUSRankScience = 'US Rank Science';
var keyUSRankReading = 'US Rank Reading';



// GRAPH ELEMENTS =============================/
var elements = [
  // ==========================================/
  // NODES ====================================/
  // ==========================================/
  { data: { id: keyEducation } },
  // PRIMARY EDUCATION ==============
  { data: { id: keyPrimary } },
  { data: { id: keyScienceAndTechnology } },
  { data: { id: keyPhysicalEducation } },
  { data: { id: keySpecialNeeds } },
  { data: { id: keyPublicFunding } },
  // HIGHER LEVEL EDUCATION =========
  { data: { id: keyHigherLevel } },
  { data: { id: keyStudentLoanDebt } },
  { data: { id: keyUnequalAdmissions } },
  { data: { id: keyHighRankingUniversities } },
  // INTERNATIONAL EDUCATION ========
  { data: { id: keyInternational } },
  { data: { id: keyQualitativeDifferences } },
  { data: { id: keyUSRank } },
  { data: { id: keyUSRankMath } },
  { data: { id: keyUSRankScience } },
  { data: { id: keyUSRankReading } },

  // ==========================================/
  // EDGES ====================================/
  // ==========================================/
  // MAIN 3
  {
    data: {
      id: 'E-P',
      source: keyEducation,
      target: keyPrimary,
      desc: "Primary School education - elementary, middle and high school",
    }
  },
  {
    data: {
      id: 'E-HL',
      source: keyEducation,
      target: keyHigherLevel,
      desc: "Higher Level education - associates, bachelors, masters, etc.",
    }
  },
  {
    data: {
      id: 'E-I',
      source: keyEducation,
      target: keyInternational,
      desc: "Internation education - how does the US compare internationally",
    }
  },
  // PRIMARY EDUCATION
  {
    data: {
      id: 'P-ST',
      source: keyPrimary,
      target: keyScienceAndTechnology,
      desc: "STEM education in US primary schools has been increasingly critiqued for decades now and for good reason. The fact that in 2020 most students in the nation cannot take a software, technology or programming class until higher level education is without question a disadvantage.",
    }
  },
  {
    data: {
      id: 'P-SN',
      source: keyPrimary,
      target: keySpecialNeeds,
      desc: "Special needs education in US primary schools severly lack/underfund special education needs. Due to COVID especially, these problems have been exasperated. I have many friends and family who are considered special needs and seeing them lacking the care and education they NEED is heartbreaking to say the least. https://edsource.org/2020/amid-shortages-schools-settle-for-underprepared-special-education-teachers/621656"
    }
  },
  {
    data: {
      id: 'P-PE',
      source: keyPrimary,
      target: keyPhysicalEducation,
      desc: "Physical education in the US has been severly undervalued and cut across the board, having clear and present (and fairly obvious) affects on younger students especially. This comes when childhood obesity is skyrocketing in this country no less - as of 2016 nearly 1/5 school age children is considered obese. https://www.cdc.gov/healthyschools/obesity/index.htm"
    }
  },
  {
    data: {
      id: 'P-PF',
      source: keyPrimary,
      target: keyPublicFunding,
      desc: "Public funding for primary schools in the US is one of the most important nodes (issues) in this entire graph as it has such a profound and reaching effect. Such funding in the US was already shockingly low and disproprotinate and now due to COVID, it continues to drop seemingly indefinitely. https://www.nytimes.com/2020/12/22/us/public-schools-enrollment-stimulus.html"
    }
  },
  // HIGHER LEVEL EDUCATION
  {
    data: {
      id: 'HL-SLD',
      source: keyHigherLevel,
      target: keyStudentLoanDebt,
      desc: "Student Loans are considered a necessity for virtually any higher level institution outside of community schooling. While not inherintly bad, the interest and default rates on these loans are at the worst extremes today. This has lasting impacts on the population, macroeconomy and the institutions in question (both the banks and schools). https://www.cnbc.com/2019/12/30/student-debt-totals-increased-by-107percent-this-decade.html",
    }
  },
  {
    data: {
      id: 'HL-UA',
      source: keyHigherLevel,
      target: keyUnequalAdmissions,
      desc: "Due to disparities in funding, testing, access and more, many universities have what most would probably consider fairly irregular admissions processes. These problems stretch far beyond the admissions office itself. I saw this article a while ago and thought it was an interesting summary. https://www.nytimes.com/2019/03/15/us/college-admissions-problems.html",
    }
  },
  {
    data: {
      id: 'UA-PF',
      source: keyUnequalAdmissions,
      target: keyPublicFunding,
      desc: "One of the most obvious sources of such unequal admissions opportunity is disproportinate funding amongs primary schools. Not only does this (theoretically) lead to lower education quality, but it restricts students opportunities to be more competitive. Fewer SATs (and tutors), ACT, AP, IB, etc. - all the things that students nowadays \'need\' to compete. This article is a bit old but I remember reading it in high school and really appreciating it. https://www.theatlantic.com/education/archive/2014/07/why-poor-schools-cant-win-at-standardized-testing/374287/",
    }
  },
  {
    data: {
      id: 'HL-HRU',
      source: keyHigherLevel,
      target: keyHighRankingUniversities,
      desc: "Despite all the issues listed, the US is home to MANY of the best and most prestigious universities in the world. I think this is a really interesting point so heres a couple interesting articles I found. Despite the source on this one, there are many interesting viewpoints and theory here as to why this is the case: https://academia.stackexchange.com/questions/55792/why-are-most-of-the-top-universities-american. This times article argues actually the opposite, that these rankings are actually far off for various reasons https://www.nytimes.com/2014/06/29/upshot/americans-think-we-have-the-worlds-best-colleges-we-dont.html.",
    }
  },
  // INTERNATIONAL COMPARISON
  // qualitative diffs
  {
    data: {
      id: 'I-QD',
      source: keyInternational,
      target: keyQualitativeDifferences,
      desc: "Beyond just rankings, there are real, tangible differences in the quality of education in the US vs other OECD countries. These go beyond just the test scores and rankings, especially when you look more towards the \'average\' or \'normal\' school in the US."
    }
  },
  // rankings
  {
    data: {
      id: 'I-USR',
      source: keyInternational,
      target: keyUSRank,
      desc: "Rankings can help quantify the differences between the US and other countries education system/quality. These scores are based on tests and while standardized testing is definitely not an all inclusive or perfect metric, we often consider ourselves \'the best\' country and this often helps show how much better we could actually be doing. I will admit the reading scores surprised me a bit - upon further research that has apparently been rising in recent years which I found interesting. The following figures were taken from https://www.oecd.org/pisa/ and based off the PISA scale. A nice graphic is available here: https://factsmaps.com/pisa-2018-worldwide-ranking-average-score-of-mathematics-science-reading/"
    }
  },
  {
    data: {
      id: 'USR-Math',
      source: keyUSRank,
      target: keyUSRankMath,
      desc: "37/78. Right between Spain and Malta.",
    }
  },
  {
    data: {
      id: 'USR-Science',
      source: keyUSRank,
      target: keyUSRankScience,
      desc: "18/78. Right between Netherlands and Belgium.",
    }
  },
  {
    data: {
      id: 'USR-Reading',
      source: keyUSRank,
      target: keyUSRankReading,
      desc: "13/77. Right between Sweden and Japan.",
    }
  },
];

// GRAPH OBJECT ===================================
var cy = cytoscape({
  container: document.getElementById('cy'),
  elements: elements,
  style: [
    {
      selector: 'node',
      style: {
        shape: 'circle',
        'background-color': '#FFC300',
        label: 'data(id)'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],
  layout: {
    name: 'circle'
  }
});

// specific styles
var color1 = '#581845';
var color2 = '#C70039';
cy.nodes('[id = \'' + keyEducation + '\']').style('background-color', color1);
cy.nodes('[id = \'' + keyPrimary + '\']').style('background-color', color2);
cy.nodes('[id = \'' + keyHigherLevel + '\']').style('background-color', color2);
cy.nodes('[id = \'' + keyInternational + '\']').style('background-color', color2);

// make edges show dialog on click
cy.on('click', 'edge', function (evt) {
  var msg = evt.target._private.data.desc;
  if (typeof msg !== 'undefined') {
    confirm(msg);
  }
});