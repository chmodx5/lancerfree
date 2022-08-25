/* eslint-disable react/jsx-key */
import {
  WorkerLayout,
  AppTabs,
  ProjectDetails,
  PlaceBid,
  BidsOnProject,
} from "./../../../src/";

const id = () => {
  return (
    <div className="w-full">
      <AppTabs
        tabHeaders={["project", "bids"]}
        tabItems={[
          <div className="space-y-4">
            <div>
              <ProjectDetails />
            </div>
            <div>
              <PlaceBid />
            </div>
          </div>,
          <div>
            <BidsOnProject />
          </div>,
        ]}
      />
    </div>
  );
};

export default id;
id.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
