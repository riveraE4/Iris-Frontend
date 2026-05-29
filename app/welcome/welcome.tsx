import { Show, SignInButton, SignUpButton } from "@clerk/react-router";

export function Welcome() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-16 text-center">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Authentication powered by Clerk
      </span>

      <h1 className="max-w-2xl bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-400 sm:text-6xl">
        Welcome to Iris
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        A modern starting point with secure sign-in already wired up. Create an
        account or sign in to get started.
      </p>

      <Show when="signed-out">
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <SignUpButton mode="modal">
            <button className="w-full rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:w-auto">
              Get started
            </button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button className="w-full rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto">
              Sign in
            </button>
          </SignInButton>
        </div>
      </Show>

      <Show when="signed-in">
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-base font-medium text-gray-900 dark:text-white">
            You&apos;re signed in.
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Use the avatar in the top right to manage your account.
          </p>
        </div>
      </Show>
    </main>
  );
}
