import { useEffect } from 'react';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import OfferCard from './OfferCard';
import Select from '../ui/layout/input/Select';

const OfferList = () => {
  const offersContext = useOffersContext();
  const { t } = useTranslation('common');

  useEffect(() => {}, [offersContext.offersList]);

  return (
    <div className="flex flex-grow w-full overflow-hidden">
      <div className="w-full overflow-scroll">
        <div className="flex w-full p-2 justify-end items-center">
          {t('sort-by')}:
          <Select
            value={offersContext.order}
            onChange={(e) => offersContext.setOrder(e.target.value)}
          >
            {Object.values(FiltersStates).map((filter) => (
              <option key={`state-${filter}`} value={filter}>
                {t(filter)}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex px-4 flex-col">
          {offersContext.offersList.map((offer) => (
            <OfferCard offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferList;
