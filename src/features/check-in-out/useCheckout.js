import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`订单 #${data.id} 办理退房成功`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("办理退房失败，请重新核对信息"),
  });

  return { checkout, isCheckingOut };
}
