import Child1 from "./Child1"

function Parent() {


    const User = {
        name: "akash",
        age: "24",
        role: "admin"
    }

    function handleClick() {
        console.log("Im Clicked");
    }



    return (
        <div>

            <div>
                <div className="h-50 bg-purple-600">
                    <div className="h-40">
                        <div className="h-30 bg-green-400">
                            <div className="h-20 bg-green-200">
                                <div className="h-10 bg-red-100">
                                    1

                                </div>
                                2

                            </div>
                            3

                        </div>
                        4

                    </div>
                    5


                </div>
            </div>


            {/* <Child1 
              work={User.role}
              onClick={handleClick}
            />

            <div className="h-100">
                <h1>Hii This is akash</h1>

            </div>
            <div className="relative">
                <h1>School name</h1>
                
                <div className="top-20">
                    <h1>This is Shree</h1>
                    <p>He is My buddy</p>
                </div>

            </div> */}
        </div>
    )
}
export default Parent