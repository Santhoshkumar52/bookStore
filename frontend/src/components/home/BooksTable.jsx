import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full shadow-lg text-gray-300 rounded-2xl' >
      <thead>
        <tr className='border border-gray-400 text-gray-500 text-xl'>
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
          <tr key={book._id} className='h-8 text-gray-500 border hover:bg-gray-100'>
            <td className=' rounded-md text-center'>
              {index + 1}
            </td>
            <td className=' rounded-md text-center'>
              {book.title}
            </td>
            <td className=' rounded-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className=' rounded-md text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className=' rounded-md text-center'>
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
