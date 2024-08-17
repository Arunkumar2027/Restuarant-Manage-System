import { Button, Dialog } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyNowModal = ({ buyNowFunction, addressInfo, setAddressInfo }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Validate if any field is empty
        if (
            addressInfo.name === "" ||
            addressInfo.address === "" ||
            addressInfo.pincode === "" ||
            addressInfo.mobileNumber === ""
        ) {
            return toast.error("All Fields are required");
        }

        // Call buyNowFunction if all fields are filled
        buyNowFunction();

        // Close the modal
        handleOpen();
    };

    return (
        <>
            <div className="    right-50   p-4 flex justify-center">
                <Button
                    type="button"
                    onClick={handleOpen}
                    className="w-full md:w-auto px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
                >
                    Buy now
                </Button>
            </div>

            {open && (
                <div className="fixed inset-0  py-40 px-96 flex-col items-center justify-center bg-black bg-opacity-50 ">
                    <Dialog
                        onClose={handleOpen}
                        open={open}
                        className=""
                    >
                     <div className="bg-pink-100 w-full p-5 rounded-2xl ">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-black">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={addressInfo.name}
                                    onChange={handleChange} // Ensure onChange handler is provided
                                    placeholder="Enter your name"
                                    className="input-field w-lg-full w-full p-2 border border-pink-500 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={addressInfo.address}
                                    onChange={handleChange} // Ensure onChange handler is provided
                                    placeholder="Enter your address ex:-room no,hall no,table no"
                                    className="input-field w-lg-full w-full p-2 border border-pink-500 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">pinCode</label>
                                <input
                                    type="number"
                                    name="pincode"
                                    value={addressInfo.pincode}
                                    onChange={handleChange} // Ensure onChange handler is provided
                                    placeholder="Enter your room or hall or table no."
                                    className="input-field w-lg-full w-full p-2 border border-pink-500 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Mobile Number</label>
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={addressInfo.mobileNumber}
                                    onChange={handleChange} // Ensure onChange handler is provided
                                    placeholder="Enter your mobile number"
                                    className="input-field w-lg-full w-full p-2 border border-pink-500 rounded"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <Button
                                type="button"
                                onClick={handleOpen}
                                className="px-4 py-3 text-center text-gray-100 bg-gray-600 border border-transparent rounded-lg"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-lg"
                            >
                               Confirm
                            </Button>
                        </div>
                        </div>
                    </Dialog>
                </div>
            )}
        </>
    );
};

export default BuyNowModal;
