/* Show the project identity and portfolio credits. */
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-brand">JobFlexCat</p>
        <small>&copy; {new Date().getFullYear()} FinrichEu</small>
      </div>
      <p className="footer-description">
        A personal portfolio project, designed and developed by <strong>FinrichEu</strong>.
        {' '}Built to learn, experiment, and showcase web development skills.
      </p>
    </footer>
  )
}
