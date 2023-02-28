import { useState } from 'react';
import { sanitize } from '../../utils/miscelleneous';
import Loading from '../loading/index';
import { toast } from 'react-hot-toast';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center lg:flex-row newsletter-input-fields">
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#ffffff] focus:border-accentColor"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="shadow  bg-pink-700 hover:bg-pink-600 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-4 rounded" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center m-3 min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
            <>
            <div className="text-green-00 font-bold pt-2 text-center" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
            {/* {toast.success(getMessage(message))} */}
            </>
        )}
      </div>
    </div>
  );
}

export default NewsletterForm