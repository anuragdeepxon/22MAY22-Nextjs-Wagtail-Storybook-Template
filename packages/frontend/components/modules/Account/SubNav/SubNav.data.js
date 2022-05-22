import {BellIcon, CogIcon, CreditCardIcon, KeyIcon, ShoppingBagIcon} from "@heroicons/react/outline";

const subNavigation = [
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Payment & Billing', href: '#', icon: CreditCardIcon, current: true },
  { name: 'Orders', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
]

export { subNavigation }