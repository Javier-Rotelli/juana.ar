function Page({ children, className }) {
  return <div className={`screen ${className}`}>{children}</div>;
}

export default Page;
