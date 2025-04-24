import './Header.scss';
import SearchComponent from "./SearchHandler.tsx";
import {useEffect, useRef, useState} from "react";
import LangJSON from "../../assets/lang/Lang.json";
import {useLanguage} from "../context/LanguageProvider.tsx";

const Header: React.FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    const [categories, setCategories] = useState<string[][]>([]);
    const [departments, setDepartments] = useState<string[]>([]);

    const [isCategory, setisCategory] = useState<boolean>(false);
    const [isDepartment, setisDepartment] = useState<boolean>(false);

    const categoryListsRefs = [
        useRef<HTMLUListElement>(null),
        useRef<HTMLUListElement>(null),
        useRef<HTMLUListElement>(null)
    ];

    const {language, translations} = useLanguage();

   /* const handleLanguageChange = (lang: Language): void => {
        setLanguage(lang);
    };*/


    useEffect(() => {
        const loadCategories = async () => {
            const newCategories: string[][] = [];

            for (let i = 0; i < 3; i++) {
                const row: string[] = [];
                for (let j = 0; j < 8; j++) {
                    row.push(`${translations.category}`);
                }
                newCategories.push(row);
            }

            setCategories(newCategories);
        };

        const loadDepartments = async () => {
            const translations = LangJSON[language];
            const newDepartments: string[] = [];

            for (let i = 0; i < 15; i++) {
                newDepartments.push(translations.department);
            }

            setDepartments(newDepartments);
        };

        loadDepartments();
        loadCategories();


    }, [language, translations]);

    const marginLeft = language === 'en' ? '100px' : '80px';

    return (
        <header className="header-container">
            <div className="stripe">
                <p>{translations.discountMessage}</p>
                <span className="stripe-price">{translations.discountMessageValue}</span>
                <p>{translations.discountMessageFinal}</p>
                <p>{translations.couponMessage}</p>
            </div>

            <div className="header-content">

                <img
                    src="/assets/image/logo.png"
                    alt="Image Logo"
                    className="logo-image"
                    id="header-logo"
                />

                <SearchComponent isMobile={false}/>


                <div className="user-info-icons" id="user-section">
                    <button id="mobile-menu-toggle">
                        <i onClick={() => setIsMobile(!isMobile)} className="bi bi-list user-avatar-icon mobile"></i>
                    </button>
                    <i className="bi bi-person user-avatar-icon" id="user-icon"></i>
                    <p className="user-greeting" id="user-greeting">
                        {translations.greeting} <br/>
                        {translations.username}
                    </p>
                    <div className="cart-notification-wrapper" id="cart-section">
                        <p className="notification-badge" id="cart-count">2</p>
                        <i className="bi bi-cart cart-icon" id="cart-icon"></i>
                    </div>

                    {/*   <div className="desktop-select-language">
                        <select
                            className="language-select"
                            value={language}
                            onChange={(e) => {
                                const selectedLang = e.target.value as Language;
                                handleLanguageChange(selectedLang);
                            }}
                        >
                            {Object.entries(LangJSON[language as keyof typeof LangJSON].menu).map(([code, label]) => (
                                <option key={code} value={code}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div> */}


                </div>
                <div className="navbar-all-menu-content">
                    <nav className="navbar">
                        <ul className="nav-ul-list">
                            <li className="bar-item-li" style={{fontWeight: 'bold'}}>
                                <i className="bi bi-list icon-categories"></i>
                                <span className="all-categories-text"
                                      onMouseEnter={() => {
                                          setisCategory(false);
                                          setisDepartment(true);
                                      }}
                                >{translations.allCategories}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text"
                                      onMouseEnter={() => {
                                          setisCategory(true);
                                          setisDepartment(false);
                                      }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                            <li className="bar-item-li">
                                <span className="department-text" onMouseEnter={() => {
                                    setisCategory(false);
                                    setisDepartment(false);
                                }}>{translations.department}</span>
                            </li>
                        </ul>
                    </nav>

                    {(isCategory || isDepartment) && (
                        <div className="navbar-menu-container" onMouseLeave={() => {
                            setisCategory(false);
                            setisDepartment(false);
                        }}>
                            <div className="navbar-menu-content">
                                {isDepartment && (
                                    <div className="dropdown-container-menu"
                                         style={{display: isCategory ? 'none' : 'block'}}>
                                        <ul className="dropdown-content-menu">
                                            {departments.map((department, index) => (
                                                <li key={index} className="menu-departament bar-item-li-font-weight">
                                                    <span
                                                        style={{
                                                            //color: index === 0 ? 'var(--color-primary)' : undefined
                                                        }}
                                                    >{department}</span>
                                                    <div>
                                                        <i
                                                            className="bi bi-chevron-right departament-icon"
                                                            style={{
                                                                marginLeft,
                                                                //color: index === 0 ? 'var(--color-primary)' : undefined
                                                            }}
                                                        ></i>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="categories-container-menu">
                                    <h4 className="title-categories">{translations.department}</h4>
                                    <div className="categories-wrapper-menu">
                                        <div className="categories-wrapper-menu">
                                            {categoryListsRefs.map((ref, i) => (
                                                <ul key={i} ref={ref}>
                                                    {categories[i]?.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="category-text"
                                                            style={{
                                                                fontWeight: 500,
                                                               // color: i === 0 && idx < 1 || i === 1 && idx < 1 || i === 2 && idx < 1 ? 'var(--color-primary)' : undefined
                                                            }}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>

                                    </div>

                                </div>

                                <div className="content-menu-image">
                                    <img
                                        style={{background: 'url(/assets/image/header/image-content.png) no-repeat center center'}}
                                        src="/assets/image/header/menu-image.png"
                                        alt="image-menu"
                                        className="image-menu"
                                    />
                                    <div className="image-container-menu">
                                        <p className="promo-text">
                                            {translations.promoText} <br/>
                                            <b className="promo-highlight">{translations.promoHighlight}</b>
                                        </p>
                                        <button type="button" className="info-button-menu">
                                            {translations.viewAll}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                </div>


            </div>


            <div className={`mobile-menu-container ${isMobile ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <h3 className="mobile-menu-title"></h3>
                    <img
                        src="/assets/image/logo.png"
                        alt="Image Logo"
                        className="logo-image"
                    />
                    <i className="bi bi-x-lg mobile-menu-close" onClick={() => setIsMobile(false)}></i>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <SearchComponent isMobile={true}/>
                </div>


                <div className="mobile-dropdown-wrapper">

                    {/*}   <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="mobile-select-language">
                            <select
                                className="language-select"
                                value={language}
                                onChange={(e) => {
                                    const selectedLang = e.target.value as Language;
                                    handleLanguageChange(selectedLang);
                                }}
                            >
                                {Object.entries(LangJSON[language as keyof typeof LangJSON].menu).map(([code, label]) => (
                                    <option key={code} value={code}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>  */}


                    <div className="mobile-main-category">
                        <i className="bi bi-list icon-categories"></i>
                        <span>{translations.allCategories}</span>
                    </div>
                    <ul className="mobile-dropdown-list">
                        <li className="mobile-dropdown-item"
                            style={{color: 'var(--color-primary)'}}>{translations.department}</li>
                        <li className="mobile-dropdown-item">{translations.department}</li>
                        <li className="mobile-dropdown-item">{translations.department}</li>
                        <li className="mobile-dropdown-item">{translations.department}</li>
                        <li className="mobile-dropdown-item">{translations.department}</li>
                        <li className="mobile-dropdown-item">{translations.department}</li>
                    </ul>
                </div>

                <div className="mobile-categories-section">
                    <h4 className="mobile-categories-title">{translations.department}</h4>
                    <div className="mobile-categories-wrapper">
                        {categoryListsRefs.map((ref, i) => (
                            <ul key={i} ref={ref}>
                                {categories[i]?.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="category-text"
                                        style={{
                                            fontWeight: 500,
                                            color: i === 0 && idx < 1 || i === 1 && idx < 1 || i === 2 && idx < 1 ? 'var(--color-primary)' : undefined
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                <div className="mobile-promo-section">
                    <div className="mobile-promo-content">
                        <img
                            src="/assets/image/header/menu-image.png"
                            alt="image-menu"
                            className="mobile-promo-image"
                        />
                        <p>{translations.promoText} <br/>
                            <b>{translations.promoText} <br/>{translations.promoHighlight}</b>
                        </p>
                        <button type="button" className="mobile-promo-button">{translations.viewAll}
                        </button>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Header;