import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full list_table rounded-2xl' >
      <thead>
        <tr className='border-amber-800 border-b-2 text-xl text-neutral-200'>
          <th className=' rounded-md'>No</th>
          <th className=' rounded-md'>Title</th>
          <th className=' rounded-md max-md:hidden'>
            Author
          </th>
          <th className=' rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className=' rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8 mapped_list border-collapse text-neutral-200'>
            <td className='text-center'>
              {index + 1}
            </td>
            <td className='text-center'>
              {book.title}
            </td>
            <td className='text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className=' text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-600' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
