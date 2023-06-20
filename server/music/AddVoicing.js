module.exports.addVoicing = (voicing,objKey,listName,name,label,quality,useUpper,chName,chLabel,thisChord,options,modeObj) => {
    const notes = [];
    const check = (voicing) => {
      for (let degree of voicing) {
        if (!modeObj[degree]) {
          return false;
        }
        thisChord.relativeDegrees ? notes.push(thisChord.relativeDegrees[degree]) : null
      }
      return true
    }
    if(check(voicing)) {
      options[objKey] = {
        notes: notes,
        voicingObjKey: objKey,
        name: name == null ? `${chName}${quality}` : `${name}`,
        label: label == null ? `${chLabel}${quality}` : `${label}`,
        useUpper: useUpper
      };
      options.list.push([`${listName}`, objKey]);
    }
  }

