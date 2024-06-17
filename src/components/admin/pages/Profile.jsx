import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormInput from "../../form/FormInput";
import CustomButton from "../../utils/SubmitButton";
import { useAuth } from "../../../hooks";
import ModalButton from "../../utils/ModalButton";
import profile from "../../../image/image4.png";
import toast from "react-hot-toast";
import { adminPersonalInfoUpdate } from "../../../api/admin";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
};

const Profile = () => {
  const [openPersonal, setOpenPersonal] = useState(false);
  // const [openAddress, setOpenAddress] = useState(false);
  const { authInfo } = useAuth();

  const handleOpenPersonal = () => setOpenPersonal(true);
  const handleClosePersonal = () => setOpenPersonal(false);

  // const handleOpenAddress = () => setOpenAddress(true);
  // const handleCloseAddress = () => setOpenAddress(false);

  return (
    <div className="mt-12 p-6">
      <div>
        <h4 className="text-xl font-semibold">Profile</h4>
      </div>
      <div className="border-2 rounded-[4px] p-4 mt-4">
        <div className="">
          <div className="flex justify-start items-center">
            <h4 className="text-[24px] w-full">Profile</h4>
          </div>
          <div className="flex justify-start items-center gap-x-6 mt-4 mb-4">
            <div className="border-2 rounded-full">
              <img
                className="w-24 h-24 rounded-full"
                src={profile}
                alt={profile}
              />
            </div>
            <div>
              <h6 className="text-[16px] font-semibold">
                {authInfo.profile.name}
              </h6>
              <p className="font-semibold">{authInfo.profile.role}</p>
              <p>New Alkapuri, Gardanibagh, Patna, Bihar, India</p>
            </div>
          </div>
        </div>
        {/* Personal Information */}
        <div className="">
          <div className="flex justify-start items-center">
            <h4 className="text-[20px] w-full">Personal Information</h4>
            <div>
              <ModalButton onClick={handleOpenPersonal}>Edit</ModalButton>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-start items-center w-full gap-x-10">
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">Name</p>
                <p className="text-[16px] ">{authInfo.profile.name}</p>
              </div>
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">Email Id</p>
                <p className="text-[16px]">{authInfo.profile.email}</p>
              </div>
            </div>
            <div className="flex justify-start items-center w-full gap-x-10 mt-2">
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">Mobile No.</p>
                <p className="text-[16px]">{authInfo.profile.mobile}</p>
              </div>
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">Bio</p>
                <p className="text-[16px]">{authInfo.profile.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        {/* <div className="mt-4">
          <div className="flex justify-start items-center">
            <h4 className="text-[20px] w-full">Address</h4>
            <div>
              <ModalButton >Edit</ModalButton>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-start items-center w-full gap-x-10">
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">Country</p>
                <p className="text-[16px] ">India</p>
              </div>
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">State</p>
                <p className="text-[16px]">Bihar</p>
              </div>
            </div>
            <div className="flex justify-start items-center w-full gap-x-10 mt-2">
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">City</p>
                <p className="text-[16px]">Patna</p>
              </div>
              <div className="w-6/12">
                <p className="text-[18px] font-semibold">Pin</p>
                <p className="text-[16px]">800002</p>
              </div>
            </div>
            <div className="w-full mt-2">
              <p className="text-[18px] font-semibold">Full Address</p>
              <p className="text-[16px]">
                New Alkapuri, Gardanibagh, Patna, Bihar, India
              </p>
            </div>
          </div>
        </div> */}

        {/* Modals for editing */}
        <PersonalModal
          open={openPersonal}
          handleClose={handleClosePersonal}
          authInfo={authInfo}
        />
        {/* <AddressModal
          open={openAddress}
          handleClose={handleCloseAddress}
          authInfo={authInfo}
        /> */}
      </div>
    </div>
  );
};

const validateUserInfo = ({ name, email, mobile, password }) => {
  const isValidName = /^[a-z A-Z]+$/;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidMobile = /^[6-9]\d{9}$/;

  if (!name.trim()) return { ok: false, error: "Name is Missing" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid name !" };

  if (!email.trim()) return { ok: false, error: "Email is Missing" };
  if (!isValidEmail.test(email))
    return { ok: false, error: "Invalid Email Id !" };

  if (!mobile.trim()) return { ok: false, error: "Mobile No. is Missing!" };
  if (!isValidMobile.test(mobile))
    return { ok: false, error: "Invalid Mobile No.!" };

  return { ok: true };
};

const PersonalModal = ({ open, handleClose, authInfo }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: authInfo.profile.name,
    email: authInfo.profile.email,
    mobile: authInfo.profile.mobile,
    bio: authInfo.profile.bio,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ok, error } = validateUserInfo(personalInfo);

      if (!ok) return toast.error(error);

      const response = await adminPersonalInfoUpdate(personalInfo);

      if(response.error) return toast.error(response.error);

      if(response.message) return toast.success(response.message);

    } catch (error) {
      console.error(
        "An error occurred While Updateing Personal Information",
        error
      );
      toast.error("An unexpected error occurred. Please try again later.");
    }
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Personal Information
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormInput
                label="Name"
                placeholder="Name"
                name="name"
                value={personalInfo.name}
                onChange={handleChange}
              />
              <FormInput
                label="Email Id"
                placeholder="Email Id"
                name="email"
                value={personalInfo.email}
                onChange={handleChange}
              />
              <FormInput
                label="Mobile Number"
                placeholder="Mobile Number"
                name="mobile"
                value={personalInfo.mobile}
                onChange={handleChange}
              />
              <FormInput
                label="Bio"
                placeholder="Bio"
                name="bio"
                value={personalInfo.bio}
                onChange={handleChange}
              />
              <div className="mt-4">
                <CustomButton type="submit" className="w-full">
                  Update
                </CustomButton>
              </div>
            </div>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
};

// const AddressModal = ({ open, handleClose, authInfo }) => {
//   const [addressInfo, setAddressInfo] = useState({
//     country: "India",
//     state: "Bihar",
//     city: "Patna",
//     pin: "800002",
//     fullAddress: "New Alkapuri, Gardanibagh, Patna, Bihar, India",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddressInfo({ ...addressInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={modalStyle}>
//         <Typography id="modal-modal-title" variant="h6" component="h2">
//           Address
//         </Typography>
//         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <FormInput
//                 label="Country"
//                 placeholder="Country"
//                 name="country"
//                 value={addressInfo.country}
//                 onChange={handleChange}
//               />
//               <FormInput
//                 label="State"
//                 placeholder="State"
//                 name="state"
//                 value={addressInfo.state}
//                 onChange={handleChange}
//               />
//               <FormInput
//                 label="City"
//                 placeholder="City"
//                 name="city"
//                 value={addressInfo.city}
//                 onChange={handleChange}
//               />
//               <FormInput
//                 label="Pin"
//                 placeholder="Pin"
//                 name="pin"
//                 value={addressInfo.pin}
//                 onChange={handleChange}
//               />
//               <FormInput
//                 label="Full Address"
//                 placeholder="Full Address"
//                 name="fullAddress"
//                 value={addressInfo.fullAddress}
//                 onChange={handleChange}
//               />
//               <div className="mt-4">
//                 <CustomButton type="submit" className="w-full">
//                   Update
//                 </CustomButton>
//               </div>
//             </div>
//           </form>
//         </Typography>
//       </Box>
//     </Modal>
//   );
// };

export default Profile;
