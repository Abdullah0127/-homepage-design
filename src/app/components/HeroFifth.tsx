function HeroFifth() {
    return (
        <div>
            <div
                className="relative bg-white bg-opacity-80 h-96 border p-5 col-span-1 ml-28 mr-20 rounded-lg row-span-3 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url("/Images/image 102.png")' }}
            >
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-blue-500 opacity-50"></div>

                {/* Content */}
                <div className="relative z-10">
                    <p className="font-bold text-4xl ml-2 text-white">
                        An easy way to send <br /> request to all suppliers
                    </p>
                    <p className="mt-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at nam ea <br /> quibusdam praesentium? Ipsum nobis fugit omnis, possimus saepe <br />corporis at laboriosam assumenda explicabo earum quibusdam similique minus ducimus dolorem nam tenetur.</p>
                </div>


                {/* Form Section */}
                <div className="absolute top-0 right-0 bg-white bg-opacity-90 p-4 h-80 mt-5 mr-5 rounded-lg shadow-lg z-20 w-80">
                    <h2 className="text-lg font-bold mb-3">Send Quote to Suppliers</h2>
                    <form>
                        {/* Text input for item name */}
                        <input
                            type="text"
                            name="text"
                            placeholder="What item you need?"
                            className="text-sm border h-8 w-52 placeholder:text-black placeholder:p-2"
                        />
                        {/* Textarea for additional details */}
                        <textarea
                            name="textarea"
                            placeholder="Type more details"
                            className="text-sm border h-20 w-52 mt-2 p-2 placeholder:text-black placeholder:align-top"
                        />

                        {/* Input fields for quantity and pics */}
                        <div className="mt-2 flex gap-3">
                            <input
                                name="quantity"
                                placeholder="Quantity"
                                className="w-20 text-sm border rounded-lg p-2"
                            />
                            <select
                                name="pics"
                                className="w-20 text-sm border rounded-lg p-2"
                            >
                                <option value="">Pics</option>
                                <option value="pic1">Pic 1</option>
                                <option value="pic2">Pic 2</option>
                                <option value="pic3">Pic 3</option>
                            </select>
                        </div>
                        <input type="button" value="send inquiry" className="text-sm border bg-blue-500 text-white h-8 mt-3 rounded-md w-24" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HeroFifth;
