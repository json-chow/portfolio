import searchIcon from "../../../assets/search-icon.svg";

const BlogSectionHeader = () => {
  return (
    <section>
      <div className="border rounded-full w-1/4 m-auto py-1 px-2 flex gap-1.5 items-center">
        <img className="max-h-6" src={searchIcon} />
        <input className="max-h-6" placeholder="Search..."></input>
      </div>
    </section>
  );
};

export default BlogSectionHeader;
