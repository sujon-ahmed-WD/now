import useAuth from "../hooks/useAuth";

const Update = () => {
  const { user, UpdateProfile } = useAuth();

  const update = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
    const name = form.get("name");
    const imge = form.get("img");

    UpdateProfile(name, imge);
  };

  return (
    <div className="hero bg-green-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src={user?.photoURL}
            className=" max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="border bg-green-400">
            Name is:<span>{user?.displayName || "no name"}</span>
          </h1>
        </div>
        <div>
          <form onSubmit={update}>
            <div className="space-y-6">
              <label htmlFor="name">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent  gap-4 w-full max-w-xs"
              />
            </div>
            <div className=" pb-3 space-y-6">
              <label htmlFor="">Photo Url</label>
              <input
                name="img"
                type="text"
                placeholder="Photo url"
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-outline btn-secondary">Submet</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    /**
     *       {/* <div className="grid items-center mt-10 max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
          <img
            src={
              user?.photoURL ||
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            alt=""
            className="p-6 rounded-full  "
          />
          <div className="space-y-2">
            <h2 className="text-xl bg-fuchsia-400 pl-5 py-3 rounded-s-lg font-bold leading-tight lg:text-2xl">
              <span className="text-white mr-4">Name:</span>{" "}
              {user?.displayName || "No Name"}
            </h2>
          </div>
        </div>
        <form  noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-white"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm">
              Photo
            </label>
            <input
              id=""
              name="photo"
              type=""
              className="w-full p-3 rounded bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50"
          >
            Update
          </button>
        </form>
      </div>  
     */
  );
};

export default Update;
