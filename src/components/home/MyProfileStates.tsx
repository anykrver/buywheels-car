import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './MyProfileStates.css';

const cardsData = [
  {
    title: 'Premium Accessories',
    description: 'Curated vehicle accessories worth ₹5,000+',
    icon: 'https://ackodrive-prod.ackoassets.com/_next_static/icons/Explore_save_buy.webp',
    link: '/offers',
    eyebrow: 'Exclusive Welcome Benefit',
    cardClass: 'ExploreStateCard_cardContainer__ft6wA',
    contentClass: 'ExploreStateCard_cardContent__tO_XR',
    mainInfoClass: 'ExploreStateCard_mainInfo__HN6S6',
    iconWithArrowClass: 'ExploreStateCard_IconWitharrow__H3FTw',
    innerTitleClass: 'ExploreStateCard_innerTitleWithIcon__gLAF4',
    ctaSvgClass: 'ExploreStateCard_ctaSVG__PIaTh',
    ctaButtonClass: 'ExploreStateCard_ctaButton__IBFIn',
    ctaIconClass: 'ExploreStateCard_ctaIcon__H2Cqx',
    titleClass: 'ExploreStateCard_title__dwHfN',
    subTextClass: 'ExploreStateCard_subText__eFrxO',
  },
  {
    title: 'Extended Warranty',
    description: '1-year extended warranty coverage',
    icon: 'https://ackodrive-prod.ackoassets.com/_next_static/icons/sell_exchange.webp',
    link: '/care',
    eyebrow: 'Peace of Mind',
    cardClass: 'ValuationStateCard_cardContainer__d0b_H',
    contentClass: 'ValuationStateCard_cardContent__hVLKX',
    mainInfoClass: 'ValuationStateCard_mainInfo__Fo4ON',
    iconWithArrowClass: 'ValuationStateCard_IconWitharrow__Hmo3T',
    innerTitleClass: 'ValuationStateCard_innerTitleWithIcon__FX5Z2',
    ctaSvgClass: 'ValuationStateCard_ctaSVG__0AXVQ',
    ctaButtonClass: 'ValuationStateCard_ctaButton__ehrFJ',
    ctaIconClass: 'ValuationStateCard_ctaIcon__nyWMW',
    titleClass: 'ValuationStateCard_title__pqehT',
    subTextClass: 'ValuationStateCard_subText__QemRe',
  },
  {
    title: 'Roadside Assistance',
    description: '24/7 emergency support across Jharkhand',
    icon: 'https://ackodrive-prod.ackoassets.com/_next_static/icons/car_service.webp',
    link: '/care',
    eyebrow: '24/7 Support',
    cardClass: 'ServiceStateCard_cardContainer__G0sHV',
    contentClass: 'ServiceStateCard_cardContent__Xgs2z',
    mainInfoClass: 'ServiceStateCard_mainInfo__coM5J',
    iconWithArrowClass: 'ServiceStateCard_IconWitharrow__2l_Dr',
    innerTitleClass: 'ServiceStateCard_innerTitleWithIcon__6rXOI',
    ctaSvgClass: 'ServiceStateCard_ctaSVG__pFcGF',
    ctaButtonClass: 'ServiceStateCard_ctaButton__ciRYp',
    ctaIconClass: 'ServiceStateCard_ctaIcon__F0RL4',
    titleClass: 'ServiceStateCard_title__1L_8u',
    subTextClass: 'ServiceStateCard_subText__ge_2D',
  },
  {
    title: "Owner's Club Membership",
    description: 'Exclusive member benefits and privileges',
    icon: 'https://ackodrive-prod.ackoassets.com/_next_static/icons/Explore_save_buy.webp',
    link: '/offers',
    eyebrow: 'Privileges',
    cardClass: 'ExploreStateCard_cardContainer__ft6wA',
    contentClass: 'ExploreStateCard_cardContent__tO_XR',
    mainInfoClass: 'ExploreStateCard_mainInfo__HN6S6',
    iconWithArrowClass: 'ExploreStateCard_IconWitharrow__H3FTw',
    innerTitleClass: 'ExploreStateCard_innerTitleWithIcon__gLAF4',
    ctaSvgClass: 'ExploreStateCard_ctaSVG__PIaTh',
    ctaButtonClass: 'ExploreStateCard_ctaButton__IBFIn',
    ctaIconClass: 'ExploreStateCard_ctaIcon__H2Cqx',
    titleClass: 'ExploreStateCard_title__dwHfN',
    subTextClass: 'ExploreStateCard_subText__eFrxO',
  },
  {
    title: 'Service Reminders',
    description: 'Smart alerts for scheduled service',
    icon: 'https://ackodrive-prod.ackoassets.com/_next_static/icons/car_service.webp',
    link: '/care',
    eyebrow: 'Smart Maintenance',
    cardClass: 'ServiceStateCard_cardContainer__G0sHV',
    contentClass: 'ServiceStateCard_cardContent__Xgs2z',
    mainInfoClass: 'ServiceStateCard_mainInfo__coM5J',
    iconWithArrowClass: 'ServiceStateCard_IconWitharrow__2l_Dr',
    innerTitleClass: 'ServiceStateCard_innerTitleWithIcon__6rXOI',
    ctaSvgClass: 'ServiceStateCard_ctaSVG__pFcGF',
    ctaButtonClass: 'ServiceStateCard_ctaButton__ciRYp',
    ctaIconClass: 'ServiceStateCard_ctaIcon__F0RL4',
    titleClass: 'ServiceStateCard_title__1L_8u',
    subTextClass: 'ServiceStateCard_subText__ge_2D',
  },
  {
    title: 'Insurance Assistance',
    description: 'Best insurance deals at zero extra cost',
    icon: 'https://ackodrive-prod.ackoassets.com/_next_static/icons/sell_exchange.webp',
    link: '/finance',
    eyebrow: 'Financial Safety',
    cardClass: 'ValuationStateCard_cardContainer__d0b_H',
    contentClass: 'ValuationStateCard_cardContent__hVLKX',
    mainInfoClass: 'ValuationStateCard_mainInfo__Fo4ON',
    iconWithArrowClass: 'ValuationStateCard_IconWitharrow__Hmo3T',
    innerTitleClass: 'ValuationStateCard_innerTitleWithIcon__FX5Z2',
    ctaSvgClass: 'ValuationStateCard_ctaSVG__0AXVQ',
    ctaButtonClass: 'ValuationStateCard_ctaButton__ehrFJ',
    ctaIconClass: 'ValuationStateCard_ctaIcon__nyWMW',
    titleClass: 'ValuationStateCard_title__pqehT',
    subTextClass: 'ValuationStateCard_subText__QemRe',
  },
];

export default function MyProfileStates() {
  return (
    <section className="MyProfileStates_myProfileStates__jyVyi">
      {cardsData.map((card, idx) => (
        <div key={idx} className={card.cardClass}>
          <div className={card.contentClass}>
            <div className={card.mainInfoClass} data-section-type="mainInfo">
              <div className={card.iconWithArrowClass}>
                <div className={card.innerTitleClass}>
                  <img
                    alt={card.title}
                    decoding="async"
                    data-nimg="fill"
                    className={card.ctaSvgClass}
                    src={card.icon}
                    style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                  />
                  <Link to={card.link} className={card.ctaButtonClass}>
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="ExploreStateCard_titleContainer__abc">
                  <span className="ExploreStateCard_eyebrow__def">{card.eyebrow}</span>
                  <Link to={card.link}>
                    <h3 className={card.titleClass}>{card.title}</h3>
                  </Link>
                </div>
              </div>
              <p className={card.subTextClass}>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
