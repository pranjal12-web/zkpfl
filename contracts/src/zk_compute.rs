use pbc_zk::*;

#[allow(unused)]
const WEIGHTS_VARIABLE_KIND: u8 = 0u8;

/// Perform a zk computation on secret-shared data sum the secret variables.
///
/// ### Returns:
///
/// The sum of the secret variables.
#[zk_compute(shortname = 0x61)]
pub fn sum_everything() -> Sbi32 {
    // Initialize state
    let mut summed_weights: Sbi32 = Sbi32::from(0);

    // Sum each variable
    for variable_id in secret_variable_ids() {
        if load_metadata::<u8>(variable_id) == WEIGHTS_VARIABLE_KIND {
            let weights = load_sbi::<Sbi32>(variable_id);
            summed_weights = summed_weights + weights;
        }
    }

    summed_weights
}
