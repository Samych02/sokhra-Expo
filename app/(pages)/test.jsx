import React from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import ListingForm from "../../components/ListingForm";
import COLORS from "../../constants/colors";
import {Chip} from "@rneui/themed";

const App = () => {
  // ref


  // renders
  return (

      <BottomSheet
          backgroundStyle={{backgroundColor: COLORS.brand}}
          handleIndicatorStyle={{backgroundColor: "white"}}
          ref={bottomSheetRef}
          index={0} // Initial snap point
          snapPoints={snapPoints}
          onChange={(index) => setIsVisible(index === 1)}
      >
        <BottomSheetView>
          {!isVisible &&
              <Chip
                  titleStyle={{color: COLORS.cgrey, fontSize: 18,}}
                  title="Filtrer votre recherche"
                  icon={{
                    name: 'search',
                    type: 'font-awesome',
                    size: 20,
                    color: COLORS.cgrey,
                  }}
                  onPress={handleToggleVisibility}
                  type="outline"
                  buttonStyle={{
                    backgroundColor: COLORS.fgrey,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: "center",
                    width: "90%"
                  }}
              />
          }
          {isVisible && <ListingForm today={today} setDestination={setDestination} setOrigin={setOrigin}
                                     formVisible={formVisible} setOpen={setOpen}
                                     setDate={setDate}
                                     open={open}
                                     date={date} destination={destination} origin={origin} setWeight={setWeight}
                                     weight={weight}/>}
        </BottomSheetView>
      </BottomSheet>
  );
};

export default App;
