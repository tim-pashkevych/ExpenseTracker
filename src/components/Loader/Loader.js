import { InfinitySpin } from "react-loader-spinner";
import { LoaderWrapper } from "../style/Loader.style";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <InfinitySpin
        visible={true}
        width="300"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </LoaderWrapper>
  );
};
