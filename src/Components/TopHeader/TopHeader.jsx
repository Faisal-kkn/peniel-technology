import { } from "react";
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { PhoneIcon, EnvelopeIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

function TopHeader() {


    return (
        <div className="mx-auto max-w-7xl px-6 py-2 text-white flex gap-7 items-center justify-between ">
            <div className="flex gap-5 items-center">
                <div className="flex gap-1 items-center">
                    <PhoneIcon className="w-4 h-4 " />
                    <a href='tel:+97142398571' >+971 4239 8571</a>
                </div>
                <div className="flex gap-1 items-center">
                    <EnvelopeIcon className="w-4 h-4 " />
                    <a href='mailto:info@penieltech.com'>info@penieltech.com</a>
                </div>
            </div>
            <div className="flex gap-5">
                <h6>An <b>ISO 9001:2015</b> certified company.</h6>
                <div className="flex gap-1 items-center">
                    <PencilSquareIcon className="w-4 h-4 " />
                    <h6>Request a Free Consultation</h6>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
