const Links = () => {

    const items = [
        "Homepage",
        "Work Experience",
        "Side Projects",
        "Contact",
    ]

    return <div className="links">{items.map(item=>(
        <a href={`#${item}`} key={item} style={{ marginBottom: '20px' }}>
            {item}
            </a>
    ))}</div>
}

export default Links;