import {Button} from '@nextui-org/react'
import React, {useEffect, useRef} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import InputField from '../../components/common/InputField'
import TextAreaField from '../../components/common/TextAreaField'
import LoginModal from '../../components/header/Login'
import {useAuth} from '../../context/AuthContext'
import {useModalCommon} from '../../context/ModalContext'

export default function RegisterHost() {
	const formRef = useRef()
	const methods = useForm()
	const {auth} = useAuth()
	const {onOpen} = useModalCommon()

	const {
		register,
		setValue,
		formState: {errors},
	} = methods

	useEffect(() => {
		if (auth) {
			setValue('email', auth.email)
			setValue('displayName', auth.displayName)
			setValue('phone', auth.phone)
		}
	}, [auth])

	const openModalLogin = () => {
		onOpen({
			view: <LoginModal />,
			title: 'Đăng nhập',
			showFooter: false,
		})
	}

	return (
		<div>
			<header className="bg-blue-800 p-8 text-white">
				<div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
					<div className="text-center md:text-left">
						<h1 className="text-4xl font-bold">
							Đăng căn hộ của Quý vị trên <span className="text-white">Booking.com</span>
						</h1>
						<p className="mt-4">
							Dù host là nghề tay trái hay công việc toàn thời gian, hãy đăng nhà của bạn ngay hôm nay và nhanh chóng có thêm nguồn thu
							nhập.
						</p>
					</div>
					<div className="mt-8 rounded-lg bg-white p-6 text-black shadow-lg md:mt-0">
						<h2 className="mb-4 text-xl font-bold">Đăng ký trờ thành đối tác</h2>
						<ul className="list-inside list-disc">
							<li>45% host nhận được đơn đặt đầu tiên trong vòng 1 tuần</li>
							<li>Chọn một trong hai cách nhận đơn đặt: xác nhận tức thì và xem trước để duyệt</li>
							<li>Chúng tôi xử lý thanh toán thay Quý vị</li>
						</ul>
						<button
							className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
							onClick={() => (!auth ? openModalLogin() : formRef.current?.scrollIntoView({behavior: 'smooth'}))}
						>
							Bắt đầu ngay
						</button>
					</div>
				</div>
			</header>
			<main className="container mx-auto py-16">
				<section className="text-center">
					<h2 className="mb-8 text-3xl font-bold">An tâm đăng chỗ nghỉ</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Thanh toán cho hư hại
							</p>
							<p className="text-gray-600">Chương trình đến bù hư hại của chúng tôi chi trả cho chỗ nghỉ trong trường hợp xảy ra hư hại.</p>
						</div>
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Nhận tiền thanh toán đều đặn và an toàn
							</p>
							<p className="text-gray-600">
								Được đảm bảo thanh toán và bảo vệ trước gian lận nhờ dịch vụ{' '}
								<a
									href="#"
									className="text-blue-600"
								>
									Thanh toán bởi Booking.com
								</a>
								.
							</p>
						</div>
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Quy tắc chung của chỗ nghỉ
							</p>
							<p className="text-gray-600">Cho khách tiềm năng biết về các quy tắc chung của chỗ nghỉ mà họ phải đồng ý để đặt chỗ.</p>
						</div>
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Khách đã được xác thực
							</p>
							<p className="text-gray-600">
								Chúng tôi xác minh địa chỉ email và độ tin cậy của khách cho các đối tác sử dụng Thanh toán bởi Booking.com.
							</p>
						</div>
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Chọn cách nhận đơn đặt mong muốn
							</p>
							<p className="text-gray-600">
								Nhận ngay đơn đặt của khách hoặc{' '}
								<a
									href="#"
									className="text-blue-600"
								>
									xem xét các yêu cầu đặt chỗ
								</a>{' '}
								trước khi chấp nhận.
							</p>
						</div>
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Hỗ trợ mạnh mẽ
							</p>
							<p className="text-gray-600">
								Hỗ trợ bằng 45 ngôn ngữ và quản lý chỗ nghỉ thông qua Pulse, ứng dụng dành cho đối tác của chúng tôi.
							</p>
						</div>
						<div className="text-left">
							<p className="flex items-center">
								<i className="fas fa-check-circle mr-2 text-blue-600"></i> Bảo vệ trước các khiếu nại trách nhiệm
							</p>
							<p className="text-gray-600">
								Được bảo vệ trước các khiếu nại trách nhiệm từ khách và hàng xóm với giá trị lên đến 1.000.000 EUR/GBP/USD cho mỗi đơn đặt.
							</p>
						</div>
					</div>
				</section>
			</main>

			{auth && (
				<div
					ref={formRef}
					className="mt-10 flex w-full items-center justify-center pb-32"
				>
					<FormProvider {...methods}>
						<div className="flex max-w-2xl flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-lg">
							<p className="mt-0 w-full text-center text-2xl font-bold">Trở thành đối tác của chúng tôi</p>
							<div className="mt-2" />
							<InputField
								label="Họ và tên"
								placeholder="Nhập họ và tên"
								name={'displayName'}
								register={register}
								isRequired
								errors={errors}
							/>
							<InputField
								placeholder="Nhập số điện thoại"
								label="Số điện thoại"
								name={'phone'}
								isRequired
								register={register}
								errors={errors}
							/>
							<InputField
								placeholder="Nhập email liên hệ"
								label="Email"
								isRequired
								name={'email'}
								register={register}
								errors={errors}
							/>
							<TextAreaField
								label={'Thông tin cần được tư vấn'}
								register={register}
								errors={errors}
								name={'information'}
							/>
							<Button
								className="mt-2"
								color="primary"
							>
								Gửi yêu cầu
							</Button>
						</div>
					</FormProvider>
				</div>
			)}
		</div>
	)
}
