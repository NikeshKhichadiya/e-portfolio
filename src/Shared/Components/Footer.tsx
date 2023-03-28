const Footer = () => {
    return (
        <div className="footer">
            <p className="name">
                Made with ♥ by Nikesh Khichadiya
            </p>
            <p className="time_and_date">
                {`${new Date().toLocaleString('default', { dateStyle: 'full', timeStyle: 'short' })}`}
            </p>
        </div>
    )
}

export default Footer;