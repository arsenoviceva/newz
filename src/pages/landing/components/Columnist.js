export const Columnist = ({ name, columnistBadge, text }) => {
    return (
        <ul className="list-unstyled my-3 border-end">
            <li>
                <img src="/images/columnist.jpg" className="columnist-img" />
            </li>
            <li className="my-3 fs-5 fw-bold">{name}</li>
            <li className="text-muted"> Specialize in </li>
            <li className="mb-3 fw-bold fs-20px">{columnistBadge}</li>
            <li className="text-muted pe-5"> {text}</li>

        </ul>
    )
}