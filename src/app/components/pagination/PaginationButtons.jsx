import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
const PaginationButtons = ({ setCurrentPage, currentPage, totalPages }) => {
  // const handlePageClick = ({ selected }) => {
  //   setCurrentPage(selected);
  // };
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };
  // const showNextButton = currentPage !== totalPages - 1;
  // const showPrevButton = currentPage !== 0;
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center md:justify-end"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-full">
            <MdKeyboardArrowRight className="text-[#757575] font-bold text-xl" />
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-rull mr-2">
            <MdKeyboardArrowLeft className="text-[#757575] font-bold text-xl" />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4 text-sm"
        pageClassName="block hover:bg-lightGray w-7 h-8 font-semibold rounded border-2 border-solid border-black text-black flex items-center justify-center mr-4"
        activeClassName="text-primary rounded border-2 border-solid border-primary"
      />
    </motion.div>
  );
};

export default PaginationButtons;
