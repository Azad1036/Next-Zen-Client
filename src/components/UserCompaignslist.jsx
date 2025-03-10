const UserCompaignslist = () => {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4 text-center">My Campaigns</h1>
  
        {/* Table wrapper for mobile scrolling */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-center">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b">Campaign Name</th>
                <th className="px-4 py-2 text-left border-b">Description</th>
                <th className="px-4 py-2 text-left border-b">Status</th>
                <th className="px-4 py-2 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Campaigns */}
              <tr className="border-b">
                <td className="px-4 py-2">Campaign 1</td>
                <td className="px-4 py-2">Description 1</td>
                <td className="px-4 py-2">Active</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-700">
                    Update
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Campaign 2</td>
                <td className="px-4 py-2">Description 2</td>
                <td className="px-4 py-2">Inactive</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-700">
                    Update
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Campaign 3</td>
                <td className="px-4 py-2">Description 3</td>
                <td className="px-4 py-2">Active</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-700">
                    Update
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default UserCompaignslist;
  