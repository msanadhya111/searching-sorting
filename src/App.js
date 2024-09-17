import { Searching } from "./Searching";
import { DataTable } from "./DataTable";
import { TableDataProvider } from "./store/table-data-provider";
import { MTable } from "./MTable";
import MyVirtualizedList from "./VirualizedTable";
import MyLazyLoadedImage from "./LazyLoadImage";
import src from "./assets/photo.jpg";

export const App = () => {
  // return <MTable />;
  // return <MyVirtualizedList />;
  return <MyLazyLoadedImage src={src} alt="Roomies" />;
};
