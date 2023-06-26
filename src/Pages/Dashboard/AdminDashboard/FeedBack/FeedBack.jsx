import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { AiOutlineClose } from "react-icons/ai";

const Feedback = ({ onClose, FeedbackSuccess, id }) => {
	const [axiosSecure] = useAxiosSecure();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		onClose();
		axiosSecure
			.patch(`/allclasses/feedback/${id}?feedback=${data.feedback}`)
			.then((res) => {
				if (res.data.modifiedCount) {
					FeedbackSuccess();
				}
			});
	};
	return (
		<div className="bg-white mx-auto container border border-y-2 border-cyan-400 shadow-lg shadow-cyan-400  px-10 py-10 rounded-xl">
			<div className="">
				<h1 className="text-cyan-400  bg-white font-serif font-semibold text-2xl  text-center mb-4">
					Send Feedback
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-lg mx-auto"
				>
					<textarea
						{...register("feedback")}
						className="w-full p-2 mb-4 border border-gray-300 rounded"
						placeholder="Give your feedback"
						rows="4"
					/>

					<button
						type="submit"
						className="w-full px-4 py-2 my-4 text-white bg-gray-600 rounded hover:bg-cyan-400"
					>
						Send Feedback
					</button>

					<button
						className="absolute bg-red-600 text-white rounded-full -top-2 -right-2"
						onClick={onClose}
					>
						<AiOutlineClose size={26} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Feedback;
