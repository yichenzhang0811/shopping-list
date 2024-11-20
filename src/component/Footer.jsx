const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <div className="footerWrapper">
      Total Item: {numItems} ---- Completed Item: {numPacked}
    </div>
  );
};

export default Footer;
