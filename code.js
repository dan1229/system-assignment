
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
var keyUnequalAdmissions = 'Unequal Admissions';
var keyHighRankingUniversities = 'High Ranking Universities';
var keyIndividualEffect = 'Individual Effect';
var keyMacroeconomicEffect = 'Macroeconomic Effect';
var keyAlternativeEducation = 'Alternative Education';
var keyTradeSchools = 'Trade Schools';
var keyCodingBootcamps = 'Coding Bootcamps';
var keyOnlineSchools = 'Online Schools';

// international comparison
var keyInternational = 'International';
var keyQualitativeDifferences = 'Qualitative Differences';
var keyUSRank = 'US Test Rankings';
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
  { data: { id: keyIndividualEffect } },
  { data: { id: keyMacroeconomicEffect } },
  { data: { id: keyAlternativeEducation } },
  { data: { id: keyTradeSchools } },
  { data: { id: keyCodingBootcamps } },
  { data: { id: keyOnlineSchools } },
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
      desc: "International education - how does the US compare internationally",
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
      id: 'PF-UA',
      source: keyPublicFunding,
      target: keyUnequalAdmissions,
      desc: "One of the most obvious sources of such unequal admissions opportunity is disproportinate funding amongs primary schools. Not only does this (theoretically) lead to lower education quality, but it restricts students opportunities to be more competitive. Fewer SATs (and tutors), ACT, AP, IB, etc. - all the things that students nowadays \'need\' to compete. This article is a bit old but I remember reading it in high school and really appreciating it. https://www.theatlantic.com/education/archive/2014/07/why-poor-schools-cant-win-at-standardized-testing/374287/",
    }
  },

  {
    data: {
      id: 'PF-USR',
      source: keyPublicFunding,
      target: keyUSRank,
      desc: "Lack of public funding is often cited as the most direct cause (and simplest fix) for the falling test scores in the US. While a true solution is undoubtedly larger than this one pitfall, there's no question that lack of funds nowadays especially is at least close to the root of this issue."
    }
  },
  {
    data: {
      id: 'HL-HRU',
      source: keyHigherLevel,
      target: keyHighRankingUniversities,
      desc: "Despite all the issues listed, the US is home to MANY of the best and most prestigious universities in the world. I think this is a really interesting point so heres a couple interesting articles I found. Despite the source on this one, there are many interesting viewpoints and theory here as to why this is the case: https://academia.stackexchange.com/questions/55792/why-are-most-of-the-top-universities-american. This times article argues actually the opposite, that these rankings are actually far off for various reasons https://www.nytimes.com/2014/06/29/upshot/americans-think-we-have-the-worlds-best-colleges-we-dont.html",
    }
  },
  {
    data: {
      id: 'SLD-IE',
      source: keyStudentLoanDebt,
      target: keyIndividualEffect,
      desc: "Skyrocketing student loan debts have profound effects on the individuals and families surrounding them. With such a high prevalence of such loans, any increased fiscal trouble compounds in stress and importance. This has obvious and outreaching effects on these individuals and their loved ones. Beyond the personal stresses, the amount of financial toll it takes on a person can be devastating https://www.pewtrusts.org/en/research-and-analysis/fact-sheets/2020/04/student-loan-default-has-serious-financial-consequences.",
    }
  },
  {
    data: {
      id: 'SLD-MEE',
      source: keyStudentLoanDebt,
      target: keyMacroeconomicEffect,
      desc: "The pressure that so much unpaid loans puts on our economy cannot be understated - e.g., 2008 recession. Many such debts end up being defaulted on or cancelled, nowadays especially as many people begin NEVER paying off their debt, it's starting to accrue and be passed down to future generations. http://www.levyinstitute.org/publications/the-macroeconomic-effects-of-student-debt-cancellation",
    }
  },
  {
    data: {
      id: 'HL-AE',
      source: keyHigherLevel,
      target: keyAlternativeEducation,
      desc: "In recent years, especially with the rise in technology and increased technical skill requirements, we've seen drastic increases in \'alternate\' forms of education. This includes trade and technical schools, coding bootcamps, online schools and other mediums. For more about stats regarding the rise in trade schools specifically: https://www.jamesgmartin.center/2020/02/did-you-know-trade-schools-showing-strong-enrollment-growth/",
    }
  },
  {
    data: {
      id: 'AE-TS',
      source: keyAlternativeEducation,
      target: keyTradeSchools,
      desc: "Trade schools are secondary schools designed to train students for specific skills or roles. This includes a vast variety of schools that may not be available through a \'standard\' university. In recent years, with the rise of tuition costs, many people are seeing this route as much more fiscally reasonable and sometimes even similar or even better payoff. Interestingly as well, many jobs trade schools prepare students for are considered on the tougher end of those to automate, offering a new and important level of job security. https://hbr.org/2019/10/to-prepare-for-automation-stay-curious-and-dont-stop-learning"
    }
  },
  {
    data: {
      id: 'AE-CB',
      source: keyAlternativeEducation,
      target: keyCodingBootcamps,
      desc: "Coding bootcamps are a newer and very popular form of alternative education nowadays, often advertising \'fast and easy\' ways to break into the everygrowing tech/development world. Despite mixed reviews and beliefs on the effectiveness of such programs, there's no doubt that in a world that values such skills so highly (and more every day) having a quick way to get your foot in the door is incredibly valuable. For many interesting statistics about bootcamp popularity and demographics visit: https://www.switchup.org/rankings/coding-bootcamp-survey"
    }
  },
  {
    data: {
      id: 'AE-OS',
      source: keyAlternativeEducation,
      target: keyOnlineSchools,
      desc: "Debatably no longer \'alternative education\' online schools have been around for a while now and as of March 2020 are seeming to be the standard at every higher level institute in the world. Online schools used to have a lot of stigma surrounding them so I believe the fact that every school is now an online school should offer a whole new field for schools to innovate and prove they\'re worth the extra money compared to a \'traditional\' online school. As someone who's had a fair mix of online courses, both in terms of quality and quantity, I think the future here will be very interesting to see how all schools evolve and if this becomes standardized, even at the primary school level. Some interesting numbers about how COVID's shift to online learning has affected education here: https://www.frontiersin.org/articles/10.3389/fpubh.2020.576227/full"
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
  {
    data: {
      id: 'QD-ST',
      source: keyQualitativeDifferences,
      target: keyScienceAndTechnology,
      desc: "Other OECD place a much higher emphasis on STEM and 'technical' subjects. I think this is really interesting because this is a bit more 'controversial', many in the US think we already place too much emphasis on purely STEM emphasis in primary school and push too many students to such an end. It's difficult to prove if this has any macro effect on the economy or even test scores to be frank but I think the most direct and obvious effect is on how these students careers and interests progress. An interesting way to quantify such shifts can be seen in the statistics on this page, comparing many Americans demographics and views on the matter: https://www.pewsocialtrends.org/2018/01/09/5-most-americans-evaluate-stem-education-as-middling-compared-with-other-developed-nations/",
    }
  },
  {
    data: {
      id: 'QD-PE',
      source: keyQualitativeDifferences,
      target: keyPhysicalEducation,
      desc: "Other countries value PE more than the US - flat out. The effects of which on students at the time and long term cannot be understated as well. For a fairly general view of how an interesting mix of countries like (China, Scottland, New Zealand and Jamaica) differ quantitatively and qualitatively from the US: http://www.pelinks4u.org/articles/rattigan0210.htm",
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
        'background-color': '#fdf203',
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
    name: 'breadthfirst'
  }
});

// specific styles
var color1 = '#581845';
var color2 = '#C70039';
var color3 = '#fd9a03';
cy.nodes('[id = \'' + keyEducation + '\']').style('background-color', color1);
cy.nodes('[id = \'' + keyPrimary + '\']').style('background-color', color2);
cy.nodes('[id = \'' + keyHigherLevel + '\']').style('background-color', color2);
cy.nodes('[id = \'' + keyInternational + '\']').style('background-color', color2);
cy.nodes('[id = \'' + keyStudentLoanDebt + '\']').style('background-color', color3);
cy.nodes('[id = \'' + keyUSRank + '\']').style('background-color', color3);
cy.nodes('[id = \'' + keyQualitativeDifferences + '\']').style('background-color', color3);
cy.nodes('[id = \'' + keyAlternativeEducation + '\']').style('background-color', color3);
cy.nodes('[id = \'' + keyPublicFunding + '\']').style('background-color', color3);

// make edges show dialog on click
cy.on('click', 'edge', function (evt) {
  var msg = evt.target._private.data.desc;
  if (typeof msg !== 'undefined') {
    confirm(msg);
  }
});