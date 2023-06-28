import { DocumentMinusIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import PaperActionBar from './PaperActionBar';
import { useAuthState } from '../contexts/auth';
import { deletePaper, getAllPapers } from '../APIs/paper';

function WhitePaper({ paper, onPapersUpdate, onBookmark = () => {} }) {
  const { pathname } = useLocation();
  const auth = useAuthState();
  const handleDeletePaper = () => {
    deletePaper(paper.id).then(() => {
      getAllPapers().then((papers) => {
        onPapersUpdate(papers);
      });
    });
  };

  return (
    <div className="flex flex-col gap-4 border border-gray-300 bg-white p-4">
      <div className="flex gap-4 ">
        <img
          className="h-10 w-10 items-start rounded-full"
          src={
            import.meta.env.PROD ? '/paper-frontend/avatar.jpeg' : 'avatar.jpeg'
          }
          alt="user avatar"
        />
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center">
            <h6 className="text-sm">{paper.user}</h6>
            <span className="text-sm text-gray-400 ml-3">
              {paper.createdDate}
            </span>
            {auth.username === paper.user && pathname !== '/bookmarks' && (
              <DocumentMinusIcon
                className="ml-auto h-6 w-6 cursor-pointer text-gray-500 hover:text-red-500"
                onClick={handleDeletePaper}
              />
            )}
          </div>
          <p className="font-handwrite">{paper.text}</p>
        </div>
      </div>
      <PaperActionBar paperID={paper.id} onBookmark={onBookmark} />
    </div>
  );
}

export default WhitePaper;
